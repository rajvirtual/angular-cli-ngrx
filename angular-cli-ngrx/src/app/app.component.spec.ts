import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { AuthorService } from './services/author.service';
import { BlogService } from 'app/services/blog.service';
import { BlogActions } from "app/actions/blogAction";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent
      ],
      providers: [AuthorService, BlogService, BlogActions], 
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));



});
