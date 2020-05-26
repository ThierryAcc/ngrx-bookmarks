import { Component, OnInit, ViewChild } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable, of } from "rxjs";

import * as bookmarkActions from "../state/bookmark.actions";
import * as fromBookmark from "../state/bookmark.reducer";
import { Bookmark } from "../bookmark.model";
import { MatSort, MatDialog } from "@angular/material";
import { delay } from "rxjs/operators";
import { DialogComponent } from "src/app/dialog/dialog.component";

@Component({
  selector: "app-bookmark-list",
  templateUrl: "./bookmark-list.component.html",
  styleUrls: ["./bookmark-list.component.css"],
})
export class BookmarkListComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>;
  error$: Observable<String>;
  dataSource = of(this.bookmarks$).pipe(delay(1000));
  displayedColumns: string[] = ["name", "url", "group"];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromBookmark.AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new bookmarkActions.LoadBookmarks());
    this.bookmarks$ = this.store.pipe(select(fromBookmark.getBookmarks));
    this.error$ = this.store.pipe(select(fromBookmark.getError));
  }

  deleteBookmark(bookmark: Bookmark) {
    let dialogRef = this.dialog.open(DialogComponent, { data: { bookmark } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "true") {
        this.store.dispatch(new bookmarkActions.DeleteBookmark(bookmark.id));
      }
    });
  }
}
