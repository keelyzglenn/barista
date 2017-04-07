import { BaristaPage } from './app.po';

describe('barista App', () => {
  let page: BaristaPage;

  beforeEach(() => {
    page = new BaristaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
