import { InstaQuotesPage } from './app.po';

describe('insta-quotes App', function() {
  let page: InstaQuotesPage;

  beforeEach(() => {
    page = new InstaQuotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
