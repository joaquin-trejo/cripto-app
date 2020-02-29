import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public registrarUsuario = (usuario: Usuario): any => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/auth/signup`;
    this.http.post(URL, usuario);
  }

  public loginUsuario = (credenciales: any): any => {
    const URL = `https://cripto-app.herokuapp.com/v1/api/auth/signin`;
    this.http.post(URL, credenciales);
  }

}
