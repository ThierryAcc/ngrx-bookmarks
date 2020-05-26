import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as bookmarkActions from "../state/bookmark.actions";
import * as fromBookmark from "../state/bookmark.reducer";
import { Bookmark } from "../bookmark.model";

@Component({
  selector: "app-bookmark-add",
  templateUrl: "./bookmark-add.component.html",
  styleUrls: ["./bookmark-add.component.css"],
})
export class BookmarkAddComponent implements OnInit {
  bookmarkForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromBookmark.AppState>
  ) {}

  ngOnInit() {
    this.bookmarkForm = this.fb.group({
      name: ["", [Validators.required]],
      url: [
        "http://",
        [
          Validators.required,
          Validators.pattern(new RegExp("^(http|https)://", "i")),
        ],
      ],
      group: ["", Validators.required],
    });
  }

  initializeFormGroup() {
    this.bookmarkForm.setValue({
      name: "",
      url: "http://",
      group: "Work",
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  createBookmark() {
    const newBookmark = {
      name: this.bookmarkForm.get("name").value,
      url: this.bookmarkForm.get("url").value,
      group: this.bookmarkForm.get("group").value,
    };

    this.store.dispatch(new bookmarkActions.CreateBookmark(newBookmark));
    this.bookmarkForm.reset();
    //this.initializeFormGroup();
  }
}
