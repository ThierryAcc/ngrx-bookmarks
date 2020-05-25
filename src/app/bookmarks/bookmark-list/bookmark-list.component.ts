import { Component, OnInit, ViewChild } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable, of } from "rxjs";

import * as bookmarkActions from "../state/bookmark.actions";
import * as fromBookmark from "../state/bookmark.reducer";
import { Bookmark } from "../bookmark.model";
import { MatTableDataSource, MatSort } from '@angular/material';
import { delay } from 'rxjs/operators';

@Component({
  selector: "app-bookmark-list",
  templateUrl: "./bookmark-list.component.html",
  styleUrls: ["./bookmark-list.component.css"],
})
export class BookmarkListComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>;
  error$: Observable<String>;
  dataSource = of(this.bookmarks$).pipe(delay(1000))
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['name', 'url', 'group'];

  constructor(private store: Store<fromBookmark.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new bookmarkActions.LoadBookmarks());
    this.bookmarks$ = this.store.pipe(select(fromBookmark.getBookmarks));
    this.error$ = this.store.pipe(select(fromBookmark.getError));
  }

  deleteBookmark(bookmark: Bookmark) {
    if (confirm("Delete Bookmark?")) {
      this.store.dispatch(new bookmarkActions.DeleteBookmark(bookmark.id));
    }
  }
}
