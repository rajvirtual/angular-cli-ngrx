import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable'
import { Action } from "@ngrx/store";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { BlogService } from "app/services/blog.service";
import { BlogActions } from "app/actions/blogAction";

@Injectable()
export class BlogEffects {
    constructor(
        private actions$: Actions,
        private blogService: BlogService,
        private blogActions: BlogActions
    ) { }

    @Effect()
    loadBlogs$: Observable<Action> = this.actions$
        .ofType('REQUEST_BLOGS')
        .switchMap(action => this.blogService.loadBlogs(action.payload))
        .map((blogs: any) => this.blogActions.loadBlogsSuccess(blogs)
        );

    @Effect() addBlog$ = this.actions$
        .ofType('ADD_BLOG')
        .map(action => action.payload)
        .switchMap(blog => this.blogService.addBlog(blog))
        .map(blog => this.blogActions.addBlogSuccess(blog));


    @Effect() deleteBlog$ = this.actions$
        .ofType('DELETE_BLOG')
        .map(action => action.payload)
        .switchMap(blog => this.blogService.deleteBlog(blog))
        .map(blog => this.blogActions.deleteBlogSuccess(blog));
}