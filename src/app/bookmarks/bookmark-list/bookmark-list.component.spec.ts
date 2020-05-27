import { provideMockStore } from '@ngrx/store/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BookmarkListComponent } from './bookmark-list.component'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { bookmarkReducer } from '../state/bookmark.reducer'
import { EffectsModule } from '@ngrx/effects'
import { BookmarkEffect } from '../state/bookmark.effects'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
} from '@angular/material'
import { BookmarkComponent } from '../bookmark/bookmark.component'
import { BookmarkAddComponent } from '../bookmark-add/bookmark-add.component'

describe('BookmarkListComponent', () => {
  let component: BookmarkListComponent
  let fixture: ComponentFixture<BookmarkListComponent>
  const initialState = {
    bookmarks: [
      {
        name: 'Amazon',
        url: 'http://amazon.de',
        group: 'Leisure',
        id: 2,
      },
      {
        name: 'Google',
        url: 'http://www.google.ch',
        group: 'Leisure',
        id: 51,
      },
    ],
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookmarkComponent,
        BookmarkAddComponent,
        BookmarkListComponent,
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()
    fixture = TestBed.createComponent(BookmarkListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
