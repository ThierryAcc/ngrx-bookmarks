import { Action } from '@ngrx/store'
import { Bookmark } from '../bookmark.model'

export enum BookmarkActionTypes {
  LOAD_BOOKMARKS = '[Bookmark] Load Bookmarks',
  LOAD_BOOKMARKS_SUCCESS = '[Bookmark] Load Bookmarks Success',
  LOAD_BOOKMARKS_FAIL = '[Bookmark] Load Bookmarks Fail',
  CREATE_BOOKMARK = '[Bookmark] Create Bookmark',
  CREATE_BOOKMARK_SUCCESS = '[Bookmark] Create Bookmark Success',
  CREATE_BOOKMARK_FAIL = '[Bookmark] Create Bookmark Fail',
  DELETE_BOOKMARK = '[Bookmark] Delete Bookmark',
  DELETE_BOOKMARK_SUCCESS = '[Bookmark] Delete Bookmark Success',
  DELETE_BOOKMARK_FAIL = '[Bookmark] Delete Bookmark Fail',
}

export class LoadBookmarks implements Action {
  readonly type = BookmarkActionTypes.LOAD_BOOKMARKS
}

export class LoadBookmarksSuccess implements Action {
  readonly type = BookmarkActionTypes.LOAD_BOOKMARKS_SUCCESS
  constructor(public payload: Bookmark[]) {}
}

export class LoadBookmarksFail implements Action {
  readonly type = BookmarkActionTypes.LOAD_BOOKMARKS_FAIL
  constructor(public payload: string) {}
}

export class CreateBookmark implements Action {
  readonly type = BookmarkActionTypes.CREATE_BOOKMARK
  constructor(public payload: Bookmark) {}
}

export class CreateBookmarkSuccess implements Action {
  readonly type = BookmarkActionTypes.CREATE_BOOKMARK_SUCCESS
  constructor(public payload: Bookmark) {}
}

export class CreateBookmarkFail implements Action {
  readonly type = BookmarkActionTypes.CREATE_BOOKMARK_FAIL
  constructor(public payload: string) {}
}

export class DeleteBookmark implements Action {
  readonly type = BookmarkActionTypes.DELETE_BOOKMARK
  constructor(public payload: number) {}
}

export class DeleteBookmarkSuccess implements Action {
  readonly type = BookmarkActionTypes.DELETE_BOOKMARK_SUCCESS
  constructor(public payload: number) {}
}

export class DeleteBookmarkFail implements Action {
  readonly type = BookmarkActionTypes.DELETE_BOOKMARK_FAIL
  constructor(public payload: string) {}
}

export type BookmarkActions =
  | LoadBookmarks
  | LoadBookmarksSuccess
  | LoadBookmarksFail
  | CreateBookmark
  | CreateBookmarkSuccess
  | CreateBookmarkFail
  | DeleteBookmark
  | DeleteBookmarkSuccess
  | DeleteBookmarkFail
