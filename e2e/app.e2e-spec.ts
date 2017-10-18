import { AnimalKindomPage } from './app.po';

describe('animal-kindom App', () => {
  let page: AnimalKindomPage;

  beforeEach(() => {
    page = new AnimalKindomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
