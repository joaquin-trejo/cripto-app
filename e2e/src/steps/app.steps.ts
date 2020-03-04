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

Then(/^debo tener el resultado 1327.96$/, async () => {
  expect(await page.getTitleText()).to.equal('Realizar Cambio');
});
