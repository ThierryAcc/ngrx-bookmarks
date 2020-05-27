import { BookmarkActionTypes } from './../state/bookmark.actions'
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core'

import { Observable, of, Subject } from 'rxjs'

import { Store, select, ActionsSubject } from '@ngrx/store'
import * as bookmarkActions from '../state/bookmark.actions'
import * as fromBookmark from '../state/bookmark.reducer'
import { Actions, ofType } from '@ngrx/effects'
import { Bookmark } from '../bookmark.model'
import { MatSort, MatDialog } from '@angular/material'
import { delay, map } from 'rxjs/operators'
import { DialogComponent } from 'src/app/dialog/dialog.component'

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css'],
})
export class BookmarkListComponent implements OnInit, OnDestroy {
  bookmarks$: Observable<Bookmark[]>
  error$: Observable<String>
  dataSource = of(this.bookmarks$).pipe(delay(1000))
  displayedColumns: string[] = ['name', 'url', 'group']
  // @ViewChild(MatSort, { static: true }) sort: MatSort
  destroyed$ = new Subject<boolean>()

  constructor(
    public dialog: MatDialog,
    actions$: Actions,
    private store: Store<fromBookmark.AppState>
  ) {
    actions$
      .pipe(ofType(BookmarkActionTypes.CREATE_BOOKMARK_SUCCESS))
      .subscribe(() => this.store.dispatch(new bookmarkActions.LoadBookmarks()))
  }

  ngOnInit() {
    this.store.dispatch(new bookmarkActions.LoadBookmarks())
    this.bookmarks$ = this.store.pipe(select(fromBookmark.getBookmarks))
    this.error$ = this.store.pipe(select(fromBookmark.getError))
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
    this.destroyed$.complete()
  }

  deleteBookmark(bookmark: Bookmark) {
    let dialogRef = this.dialog.open(DialogComponent, { data: { bookmark } })
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.store.dispatch(new bookmarkActions.DeleteBookmark(bookmark.id))
      }
    })
  }
}
