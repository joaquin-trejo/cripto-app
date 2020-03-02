import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  constructor(private http: HttpClient) { }

  public obtenerCriptoMonedas = (from: number, to: number): any => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/moneda/lista?from=${from}&to=${to}`;

    return this.http.get(URL);
  }

  public convertirMoneda = (qty: number, from: string, to: string): any => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/moneda/conversion?qty=${qty}&from=${from}&to=${to}`;
    return this.http.get(URL);
  }

}
