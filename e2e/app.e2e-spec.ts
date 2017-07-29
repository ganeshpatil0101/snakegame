import { SnakegamePage } from './app.po';

describe('snakegame App', () => {
  let page: SnakegamePage;

  beforeEach(() => {
    page = new SnakegamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
