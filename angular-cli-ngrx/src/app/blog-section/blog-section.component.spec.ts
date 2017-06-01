import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSectionComponent } from './blog-section.component';
import { BlogService } from 'app/services/blog.service';
import { FormsModule } from '@angular/forms';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { AuthorService } from 'app/services/author.service';
import { BlogActions } from "app/actions/blogAction";
import { HttpModule } from '@angular/http';
import { authorFilter } from 'app/reducers/authorFilter';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { blog } from 'app/reducers/blog';

describe('BlogSectionComponent', () => {
  let component: BlogSectionComponent;
  let fixture: ComponentFixture<BlogSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, RouterTestingModule.withRoutes([]),
        StoreModule.provideStore({ blog, authorFilter })],
      providers: [BlogService],
      declarations: [BlogSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
