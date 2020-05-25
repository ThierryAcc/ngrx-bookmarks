import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { bookmarkReducer } from "./state/bookmark.reducer";
import { BookmarkEffect } from "./state/bookmark.effects";

import { BookmarkComponent } from "./bookmark/bookmark.component";
import { BookmarkAddComponent } from "./bookmark-add/bookmark-add.component";
import { BookmarkListComponent } from "./bookmark-list/bookmark-list.component";
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material/';
const bookmarkRoutes: Routes = [{ path: "", component: BookmarkComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bookmarkRoutes),
    StoreModule.forFeature("bookmarks", bookmarkReducer),
    EffectsModule.forFeature([BookmarkEffect]),
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [
    BookmarkComponent,
    BookmarkAddComponent,
    BookmarkListComponent,
  ],
})
export class BookmarksModule { }
