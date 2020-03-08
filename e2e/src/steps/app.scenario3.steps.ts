import { Before, Given, Then, When, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;
setDefaultTimeout(60 * 1000);

Before(() => {
  page = new AppPage();
});

Given(/^estoy en la pagina realizar cambio para invertir orden de las monedas$/, async () => {
  await page.navigateTo();
});

When(/^escribo el valor del importe igual a 1000000$/, async () => {
  await page.setValueToConvert(1000000);
});

When(/^selecciono la moneda de origen a invertir$/, async () => {
  await page.getClickMonedaOrigen();
});


When(/^selecciono la moneda de destino a invertir$/, async () => {
  await page.getClickMonedaDestino();
});

When(/^luego invierto el orden de las monedas$/, async () => {
    await page.invertirMonedas();
  });


Then(/^debo obtener el resultado invirtiendo el orden de las monedas igual a 321.29$/, async () => {
  expect(await page.getConvertedResult()).to.equal('321.29');
});
