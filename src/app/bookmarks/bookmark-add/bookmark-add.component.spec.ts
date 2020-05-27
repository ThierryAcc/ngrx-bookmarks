import { BookmarkService } from './../bookmark.service'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BookmarkAddComponent } from './bookmark-add.component'
import { CommonModule } from '@angular/common'
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
import { provideMockStore } from '@ngrx/store/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('BookmarkAddComponent', () => {
  let component: BookmarkAddComponent
  let fixture: ComponentFixture<BookmarkAddComponent>
  const initialState = {
    bookmarks: [
      {
        name: 'Google',
        url: 'http://www.google.ch',
        group: 'Leisure',
        id: 51,
      },
    ],
  }

  beforeEach(() => {
    {
      TestBed.configureTestingModule({
        declarations: [BookmarkAddComponent],
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
          NoopAnimationsModule,
        ],
        providers: [provideMockStore({ initialState })],
      }).compileComponents()
    }
    fixture = TestBed.createComponent(BookmarkAddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
