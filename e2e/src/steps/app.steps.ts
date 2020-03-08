import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^estoy en la pagina realizar cambio$/, async () => {
  await page.navigateTo();
});

When(/^escribo el valor a convertir que es 1000000$/, async () => {
  await page.setValueToConvert(1000000);
});

// When(/^doy click al dropdown de la moneda de origen$/, async () => {
//   await page.getClickMonedaOrigen();
// });


// When(/^doy click dropdown de la moneda de destino$/, async () => {
//   await page.getClickMonedaDestino();
// });


Then(/^debo tener el resultado 1402.79$/, async () => {
  expect(await page.getConvertedResult()).to.equal('1402.79');
});
