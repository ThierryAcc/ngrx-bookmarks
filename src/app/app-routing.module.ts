import { BookmarksModule } from "./bookmarks/bookmark.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "bookmarks",
    loadChildren: () =>
      import("src/app/bookmarks/bookmark.module").then(
        (m) => m.BookmarksModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
