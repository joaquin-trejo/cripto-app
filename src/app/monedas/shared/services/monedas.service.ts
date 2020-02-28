import { Injectable } from '@angular/core';
import { Moneda } from '../models/moneda.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  constructor(private http: HttpClient) { }

  public obtenerCriptoMonedas = () => {
    const  headers = new  HttpHeaders().set('X-CustomHttpHeader', 'CUSTOM_VALUE');
    const URL = `https://cripto-app.herokuapp.com/v1/api/moneda/lista`;
    return this.http.get(URL, { headers });
  }

}
