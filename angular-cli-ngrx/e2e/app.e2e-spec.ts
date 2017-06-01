import { AngularCliNgrxPage } from './app.po';

describe('angular-cli-ngrx App', () => {
  let page: AngularCliNgrxPage;

  beforeEach(() => {
    page = new AngularCliNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
