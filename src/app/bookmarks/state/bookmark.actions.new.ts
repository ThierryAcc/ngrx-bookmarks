/* import { Action, createAction, props } from "@ngrx/store";
import { Bookmark } from "../bookmark.model";

export enum BookmarkActionTypes {
    LOAD_BOOKMARKS = "[Bookmark] Load Bookmarks",
    LOAD_BOOKMARKS_SUCCESS = "[Bookmark] Load Bookmarks Success",
    LOAD_BOOKMARKS_FAIL = "[Bookmark] Load Bookmarks Fail",
    CREATE_BOOKMARK = "[Bookmark] Create Bookmark",
    CREATE_BOOKMARK_SUCCESS = "[Bookmark] Create Bookmark Success",
    CREATE_BOOKMARK_FAIL = "[Bookmark] Create Bookmark Fail",
    DELETE_BOOKMARK = "[Bookmark] Delete Bookmark",
    DELETE_BOOKMARK_SUCCESS = "[Bookmark] Delete Bookmark Success",
    DELETE_BOOKMARK_FAIL = "[Bookmark] Delete Bookmark Fail",
}


export const loadBookmarks = createAction(BookmarkActionTypes.LOAD_BOOKMARKS, props<{ bookmark: Bookmark }>());
export const loadBookmarksSuccess = createAction(BookmarkActionTypes.LOAD_BOOKMARKS_SUCCESS, props<{ bookmarks: Bookmark[] }>());
export const loadBookmarksFail = createAction(BookmarkActionTypes.LOAD_BOOKMARKS_FAIL, props<{ payload: string }>());
export const createBookmark = createAction(BookmarkActionTypes.CREATE_BOOKMARK, props<{ bookmark: Bookmark }>());
export const createBookmarkSuccess = createAction(BookmarkActionTypes.CREATE_BOOKMARK_SUCCESS, props<{ bookmark: Bookmark }>());
export const createBookmarkFail = createAction(BookmarkActionTypes.CREATE_BOOKMARK_FAIL, props<{ payload: string }>());
export const deleteBookmark = createAction(BookmarkActionTypes.DELETE_BOOKMARK, props<{ payload: number }>());
export const deleteBookmarkSuccess = createAction(BookmarkActionTypes.DELETE_BOOKMARK_SUCCESS, props<{ payload: number }>());
export const deleteBookmarkFail = createAction(BookmarkActionTypes.DELETE_BOOKMARK_FAIL, props<{ payload: string }>()); */