import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { BookmarkService } from "../bookmark.service";
import * as bookmarkActions from "./bookmark.actions";
import { Bookmark } from "../bookmark.model";

@Injectable()
export class BookmarkEffect {
  constructor(
    private actions$: Actions, // actions from the store
    private bookmarkService: BookmarkService
  ) { }

  // register effect with effect decorator with the name
  // loadBookmarks of type observable
  // pipe: listen for action -> comm with server -> dispatch new action
  // ofType type of action we want to listen for
  // mergeMap: when action is dispatched map over action
  // use service to get bookmark from the servicee
  // map over bookmarks array and dispatch a new action passing the bookmarks
  // ERROR: dispatch fail action
  @Effect()
  loadBookmarks$: Observable<Action> = this.actions$.pipe(
    ofType<bookmarkActions.LoadBookmarks>(
      bookmarkActions.BookmarkActionTypes.LOAD_BOOKMARKS
    ),
    mergeMap((action: bookmarkActions.LoadBookmarks) =>
      this.bookmarkService.getBookmarks().pipe(
        map(
          (bookmarks: Bookmark[]) =>
            new bookmarkActions.LoadBookmarksSuccess(bookmarks)
        ),
        catchError((err) => of(new bookmarkActions.LoadBookmarksFail(err)))
      )
    )
  );



  @Effect()
  createBookmark$: Observable<Action> = this.actions$.pipe(
    ofType<bookmarkActions.CreateBookmark>(
      bookmarkActions.BookmarkActionTypes.CREATE_BOOKMARK
    ),
    map((action: bookmarkActions.CreateBookmark) => action.payload),
    mergeMap((bookmark: Bookmark) =>
      this.bookmarkService.createBookmark(bookmark).pipe(
        map(
          (newBookmark: Bookmark) =>
            new bookmarkActions.CreateBookmarkSuccess(newBookmark)
        ),
        catchError((err) => of(new bookmarkActions.CreateBookmarkFail(err)))
      )
    )
  );

  @Effect()
  deleteBookmark$: Observable<Action> = this.actions$.pipe(
    ofType<bookmarkActions.DeleteBookmark>(
      bookmarkActions.BookmarkActionTypes.DELETE_BOOKMARK
    ),
    map((action: bookmarkActions.DeleteBookmark) => action.payload),
    mergeMap((id: number) =>
      this.bookmarkService.deleteBookmark(id).pipe(
        map(() => new bookmarkActions.DeleteBookmarkSuccess(id)),
        catchError((err) => of(new bookmarkActions.DeleteBookmarkFail(err)))
      )
    )
  );
}
