import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { BlogEffects } from 'app/effects/blogEffects';
import { BlogService } from 'app/services/blog.service';
import { Observable } from "rxjs/Observable";
import { BlogActions } from 'app/actions/blogAction';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

describe('Blog Effect', () => {
    let runner: EffectsRunner;
    let blogEffects: BlogEffects;
    let blogService: BlogService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule
        ],
        providers: [
            BlogEffects, BlogActions, BlogService,
            { "provide": Http, "useValue": null }
        ]
    }));
    it('Call LOAD_BLOGS_SUCCESS action after REQUEST_BLOGS action',
        inject([
            EffectsRunner, BlogEffects, BlogService
        ],
            (_runner, _blogEffects, _blogService) => {
                runner = _runner;
                blogEffects = _blogEffects;
                blogService = _blogService;
                spyOn(blogService, 'loadBlogs')
                    .and.returnValue(Observable.of(['Blog1']));
                runner.queue({ type: 'REQUEST_BLOGS' });
                blogEffects.loadBlogs$.subscribe(result => {
                    expect(result.type).toEqual(BlogActions.LOAD_BLOGS_SUCCESS);
                    expect(result.payload[0]).toEqual('Blog1');
                });
            })
    );
});

