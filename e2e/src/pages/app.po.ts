import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getConvertedResult() {
    return element(by.css('.spec-resultado-de-la-conversion')).getText();
  }

  getClickMonedaOrigen() {
    return element(by.css('.spec-click-open-dropdown-origen')).click();
  }

  setMonedaOrigen(value: string) {

    return element(by.css('.spec-click-open-dropdown-origen')).sendKeys(value);
  }

  getClickMonedaDestino() {
    return element(by.css('.spec-click-open-dropdown-destino')).click();
  }
  setMonedaDestino(value: string) {

    return element(by.css('.spec-click-open-dropdown-destino')).sendKeys(value);
  }

  setTitleText() {
    return element(by.css('.spec-title-realizar-cambio')).getText();
  }

  setValueToConvert(value: number) {
    element(by.css('.spec-valor-a-convertir')).sendKeys(value);
    return element(by.css('.spec-resultado-de-la-conversion')).click();
  }
}
