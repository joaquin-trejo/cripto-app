import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MisMonedasService {

  constructor(private http: HttpClient) { }

  public getCriptoMonedasByUser = () => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/usuario/criptomonedas`;
    const TOKEN = localStorage.getItem('token');
    return this.http.get(URL, {headers: new HttpHeaders().set('Authorization', TOKEN)});
  }

  public getTop3Monedas = () => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/criptomoneda/top`;
    const TOKEN = localStorage.getItem('token');
    return this.http.get(URL, {headers: new HttpHeaders().set('Authorization', TOKEN)});
  }
}
