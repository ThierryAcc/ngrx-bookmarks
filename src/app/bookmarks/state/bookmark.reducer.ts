import * as bookmarkActions from "./bookmark.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Bookmark } from "../bookmark.model";
import * as fromRoot from "../../state/app-state";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface BookmarkState extends EntityState<Bookmark> {
  selectedBookmarkId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  bookmarks: BookmarkState;
}

// create instance of the entityadapter
export const bookmarkAdapter: EntityAdapter<Bookmark> = createEntityAdapter<
  Bookmark
>();

export const defaultBookmark: BookmarkState = {
  ids: [],
  entities: {},
  selectedBookmarkId: null,
  loading: false,
  loaded: false,
  error: "",
};

export const initialState = bookmarkAdapter.getInitialState(defaultBookmark);

export function bookmarkReducer(
  state = initialState,
  action: bookmarkActions.BookmarkActions
): BookmarkState {
  switch (action.type) {
    case bookmarkActions.BookmarkActionTypes.LOAD_BOOKMARKS_SUCCESS: {
      return bookmarkAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true,
      });
    }
    case bookmarkActions.BookmarkActionTypes.LOAD_BOOKMARKS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload,
      };
    }

    case bookmarkActions.BookmarkActionTypes.CREATE_BOOKMARK_SUCCESS: {
      return bookmarkAdapter.addOne(action.payload, state);
    }
    case bookmarkActions.BookmarkActionTypes.CREATE_BOOKMARK_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }


    case bookmarkActions.BookmarkActionTypes.DELETE_BOOKMARK_SUCCESS: {
      return bookmarkAdapter.removeOne(action.payload, state);
    }
    case bookmarkActions.BookmarkActionTypes.DELETE_BOOKMARK_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

// USED TO CREATE SELECTORS
const getBookmarkFeatureState = createFeatureSelector<BookmarkState>(
  "bookmarks"
);

// selector for specific properties
export const getBookmarks = createSelector(
  // pass future state
  getBookmarkFeatureState,

  //property we want to get
  //(state: BookmarkState) => state.bookmarks
  bookmarkAdapter.getSelectors().selectAll
);

export const getBookmarksLoading = createSelector(
  getBookmarkFeatureState,
  (state: BookmarkState) => state.loading
);

export const getBookmarksLoaded = createSelector(
  getBookmarkFeatureState,
  (state: BookmarkState) => state.loaded
);

export const getError = createSelector(
  getBookmarkFeatureState,
  (state: BookmarkState) => state.error
);

export const getCurrentBookmarkId = createSelector(
  getBookmarkFeatureState,
  (state: BookmarkState) => state.selectedBookmarkId
);
export const getCurrentBookmark = createSelector(
  getBookmarkFeatureState,
  getCurrentBookmarkId,
  (state) => state.entities[state.selectedBookmarkId]
);