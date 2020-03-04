import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getConvertedResult() {
    return element(by.css('.spec-resultado-de-la-conversion')).getText();
  }

  getTitleText() {
    return element(by.css('.spec-title-realizar-cambio')).getText();
  }

  setValueToConvert(value: number) {
    element(by.css('.spec-valor-a-convertir')).sendKeys(value);
    return element(by.css('.spec-resultado-de-la-conversion')).click();
  }
}
