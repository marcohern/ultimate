import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigate(url:string) {
    return browser.get(url);
  }

  getTitleText() {
    return element(by.css('app-root h2')).getText();
  }

  getLoginTitle() {
    return element(by.css('ult-auth-login p.card-title')).getText();
  }
}
