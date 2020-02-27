import { Injectable } from '@angular/core';
import { Moneda } from '../models/moneda.model';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  CRIPTO_MONEDAS: Moneda[] = [
    {
      idCurrency: '1ST',
      name: 'FirstBlood',
      price: '124420.44760691',
      crypto: 1
    },
    {
      idCurrency: 'AC',
      name: 'AsiaCoin',
      price: '375147686.07445890',
      crypto: 1
    },
    {
      idCurrency: 'ACT',
      name: 'Achain',
      price: '1447292.77804555',
      crypto: 1
    },
    {
      idCurrency: 'ADT',
      name: 'adToken',
      price: '4066288.56975544',
      crypto: 1
    },
    {
      idCurrency: 'ADX',
      name: 'AdEx',
      price: '114076.08091770',
      crypto: 1
    },
    {
      idCurrency: 'AE',
      name: 'Aeternity',
      price: '52693.39221595',
      crypto: 1
    },
    {
      idCurrency: 'AED',
      name: 'United Arab Emirates Dirham',
      price: '31831.62586599',
      crypto: 0
    },
    {
      idCurrency: 'AEON',
      name: 'Aeon',
      price: '54909.98591512',
      crypto: 1
    },
    {
      idCurrency: 'AFN',
      name: 'Afghan Afghani',
      price: '666841.97536277',
      crypto: 0
    },
    {
      idCurrency: 'ALL',
      name: 'Albanian Lek',
      price: '973412.46539609',
      crypto: 0
    },
    {
      idCurrency: 'AMD',
      name: 'Armenian Dram',
      price: '4138132.49622430',
      crypto: 0
    },
    {
      idCurrency: 'MP',
      name: 'HyperSpace',
      price: '3961161.18530708',
      crypto: 1
    },
    {
      idCurrency: 'ANC',
      name: 'Anoncoin',
      price: '252883.90241021',
      crypto: 1
    },
    {
      idCurrency: 'ANG',
      name: 'Netherlands Antillean Guilder',
      price: '15487.94234620',
      crypto: 0
    },
    {
      idCurrency: 'NEO',
      name: 'NEO',
      price: '810.98877805',
      crypto: 1
    }
  ];

  constructor() { }

  public obtenerCriptoMonedas = (): Moneda[] => this.CRIPTO_MONEDAS;

}
