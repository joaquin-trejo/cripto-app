import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getConvertedResult() {
    return element(by.css('.spec-resultado-de-la-conversion')).getText();
  }

  getClickMonedaOrigen() {
    element(by.css('.spec-click-open-dropdown-origen')).click();
    return element(by.css('.spec-selection-moneda-origen0')).click();
  }

  getClickMonedaDestino() {
    element(by.css('.spec-click-open-dropdown-destino')).click();
    return element(by.css('.spec-selection-moneda-destino1')).click();
  }

  invertirMonedas() {
    return element(by.css('.spec-click-invertir-monedas')).click();
  }

  setTitleText() {
    return element(by.css('.spec-title-realizar-cambio')).getText();
  }

  setValueToConvert(value: number) {
    element(by.css('.spec-valor-a-convertir')).sendKeys(value);
    return element(by.css('.spec-resultado-de-la-conversion')).click();
  }
}
