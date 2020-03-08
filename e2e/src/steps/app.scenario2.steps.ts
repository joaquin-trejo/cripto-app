import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;
setDefaultTimeout(60 * 1000);

Before(() => {
  page = new AppPage();
});

Given(/^estoy en la pagina realizar cambio para seleccionar monedas$/, async () => {
  await page.navigateTo();
});

When(/^escribo el valor del importe que es 1000000$/, async () => {
  await page.setValueToConvert(1000000);
});

When(/^selecciono la moneda de origen$/, async () => {
  await page.getClickMonedaOrigen();
});


When(/^selecciono la moneda de destino$/, async () => {
  await page.getClickMonedaDestino();
});


Then(/^debo tener el resultado2 3112484848.48$/, async () => {
  expect(await page.getConvertedResult()).to.equal('3112484848.48');
});
