import * as bookmarkActions from './bookmark.actions'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Bookmark } from '../bookmark.model'
import * as fromRoot from '../../state/app-state'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

export interface BookmarkState extends EntityState<Bookmark> {
  selectedBookmarkId: number | null
  error: string
}

export interface AppState extends fromRoot.AppState {
  bookmarks: BookmarkState
}

export const bookmarkAdapter: EntityAdapter<Bookmark> = createEntityAdapter<
  Bookmark
>()

export const defaultBookmark: BookmarkState = {
  ids: [],
  entities: {},
  selectedBookmarkId: null,
  error: '',
}

export const initialState = bookmarkAdapter.getInitialState(defaultBookmark)

export function bookmarkReducer(
  state = initialState,
  action: bookmarkActions.BookmarkActions
): BookmarkState {
  switch (action.type) {
    case bookmarkActions.BookmarkActionTypes.LOAD_BOOKMARKS_SUCCESS: {
      console.log('load bookmark success reducer')
      return bookmarkAdapter.addAll(action.payload, {
        ...state,
      })
    }

    case bookmarkActions.BookmarkActionTypes.LOAD_BOOKMARKS_FAIL: {
      return {
        ...state,
        entities: {},
        error: action.payload,
      }
    }

    case bookmarkActions.BookmarkActionTypes.CREATE_BOOKMARK_SUCCESS: {
      return bookmarkAdapter.addOne(action.payload, state)
    }

    case bookmarkActions.BookmarkActionTypes.CREATE_BOOKMARK_FAIL: {
      return {
        ...state,
        error: action.payload,
      }
    }

    case bookmarkActions.BookmarkActionTypes.DELETE_BOOKMARK_SUCCESS: {
      return bookmarkAdapter.removeOne(action.payload, state)
    }

    case bookmarkActions.BookmarkActionTypes.DELETE_BOOKMARK_FAIL: {
      return {
        ...state,
        error: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

const getBookmarkFeatureState = createFeatureSelector<BookmarkState>(
  'bookmarks'
)

export const getBookmarks = createSelector(
  getBookmarkFeatureState,
  bookmarkAdapter.getSelectors().selectAll
)

export const getError = createSelector(
  getBookmarkFeatureState,
  (state: BookmarkState) => state.error
)
