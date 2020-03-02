import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Moneda } from 'src/app/monedas/shared/models/moneda.model';
import { MiMoneda } from '../models/mi-moneda';

@Injectable({
  providedIn: 'root'
})
export class MisMonedasService {

  constructor(private http: HttpClient) { }

  public getCriptoMonedasByUser = () => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/usuario/criptomonedas`;
    const TOKEN = localStorage.getItem('token') || '';
    return this.http.get(URL, {headers: new HttpHeaders().set('Authorization', TOKEN)});
  }

  public getTop3Monedas = () => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/criptomoneda/top`;
    const TOKEN = localStorage.getItem('token') || '';
    return this.http.get(URL, {headers: new HttpHeaders().set('Authorization', TOKEN)});
  }

  public saveMonedaByUser = (moneda: Moneda) => {
    const { name: nombre, id_currency: fuente, price: precio } = moneda;
    const MI_MONEDA: MiMoneda = { nombre, fuente, precio };
    const URL = `https://cripto-app.herokuapp.com/v1/api/criptomoneda/agregar`;
    const TOKEN = localStorage.getItem('token') || '';
    return this.http.post(URL, MI_MONEDA, {headers: new HttpHeaders().set('Authorization', TOKEN)});
  }
}
