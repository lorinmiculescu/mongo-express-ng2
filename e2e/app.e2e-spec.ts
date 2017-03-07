import { AutodicePage } from './app.po';

describe('autodice App', function() {
  let page: AutodicePage;

  beforeEach(() => {
    page = new AutodicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
