import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { AuthorSectionComponent } from './author-section/author-section.component';
import { AuthorService } from './services/author.service';
import { BlogService } from 'app/services/blog.service';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { StoreModule } from '@ngrx/store';
import { blog } from './reducers/blog';
import { authorFilter } from './reducers/authorFilter';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from "app/effects/blogEffects";
import { BlogActions } from "app/actions/blogAction";


@NgModule({
  declarations: [
    AppComponent,
    BlogSectionComponent,
    BlogListComponent,
    HomeComponent,
    AuthorSectionComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore({ blog, authorFilter }),
    EffectsModule.run(BlogEffects),
  ],
  providers: [AuthorService, BlogService, BlogActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
