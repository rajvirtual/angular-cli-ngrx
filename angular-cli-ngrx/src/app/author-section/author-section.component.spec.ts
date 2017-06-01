import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSectionComponent } from './author-section.component';

import { FormsModule } from '@angular/forms';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { AuthorService } from 'app/services/author.service';
import { BlogService } from 'app/services/blog.service';
import { BlogActions } from "app/actions/blogAction";
import { HttpModule } from '@angular/http';
import { authorFilter } from 'app/reducers/authorFilter';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { blog } from 'app/reducers/blog';


describe('AuthorSectionComponent', () => {
  let component: AuthorSectionComponent;
  let fixture: ComponentFixture<AuthorSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, RouterTestingModule.withRoutes([]),
        StoreModule.provideStore({ blog, authorFilter })],
      providers: [AuthorService, BlogService, BlogActions],
      declarations: [AuthorSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
