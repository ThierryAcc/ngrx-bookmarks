import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BookmarkComponent } from './bookmark.component'
import { BookmarkAddComponent } from '../bookmark-add/bookmark-add.component'
import { BookmarkListComponent } from '../bookmark-list/bookmark-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
} from '@angular/material'
import { CommonModule } from '@angular/common'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { provideMockStore } from '@ngrx/store/testing'

describe('BookmarkComponent', () => {
  let component: BookmarkComponent
  let fixture: ComponentFixture<BookmarkComponent>
  const initialState = {
    bookmarks: [
      {
        name: 'Amazon',
        url: 'http://amazon.de',
        group: 'Leisure',
        id: 2,
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
        NoopAnimationsModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()

    fixture = TestBed.createComponent(BookmarkComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
