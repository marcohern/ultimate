import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Bienvenido a Ultimate');
  });

  it('Should display login card title', () => {
    page.navigate('login');
    expect(page.getLoginTitle()).toEqual('Login');
  });
});
