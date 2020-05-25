import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Bookmark } from "./bookmark.model";

@Injectable({
  providedIn: "root",
})
export class BookmarkService {
  private bookmarksUrl = "http://localhost:3000/bookmarks";

  constructor(private http: HttpClient) { }

  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.bookmarksUrl);
  }

  getBookmarkById(payload: number): Observable<Bookmark> {
    return this.http.get<Bookmark>(`${this.bookmarksUrl}/${payload}`);
  }

  createBookmark(payload: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(this.bookmarksUrl, payload);
  }

  updateBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.patch<Bookmark>(
      `${this.bookmarksUrl}/${bookmark.id}`,
      bookmark
    );
  }

  deleteBookmark(payload: number) {
    return this.http.delete(`${this.bookmarksUrl}/${payload}`);
  }
}
