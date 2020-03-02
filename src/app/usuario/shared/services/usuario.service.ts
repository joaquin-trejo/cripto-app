import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../shared/models/usuario';
import { Moneda } from 'src/app/monedas/shared/models/moneda.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public registrarUsuario = (usuario: Usuario, monedaSeleccionad: Moneda): Observable<any> => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/auth/signup`;
    return this.http.post(URL, {...usuario, moneda: monedaSeleccionad.id_currency});
  }

  public loginUsuario = (credenciales: any): Observable<any> => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/auth/signin`;
    return this.http.post(URL, credenciales);
  }

}
