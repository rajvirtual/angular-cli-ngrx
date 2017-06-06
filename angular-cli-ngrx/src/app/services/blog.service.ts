import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Blog } from '../shared/model/blog';


@Injectable()
export class BlogService {
  private _baseUrl = 'http://localhost:3000/';
  constructor(private http: Http) { }

  loadBlogs(filter): Observable<Blog[]> {
    if (!filter || filter === 'All') {
      return this.http.get(this._baseUrl + 'blogs').map(res => res.json());
    }
    return this.http.get(this._baseUrl + 'blogs?author=' + filter).map(res => res.json());
  }

  addBlog(blog: Blog): Observable<Object> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._baseUrl + 'blogs', blog, options)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteBlog(blog: Blog): Observable<Object> {
    return this.http.delete(this._baseUrl + 'blogs' + '/' + blog.id)
      .map((res) => blog)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
