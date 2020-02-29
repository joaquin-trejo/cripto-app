import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../usuario.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      usuario: '',
      clave: ''
    });
  }

  ngOnInit(): void {
  }

  public ingresarUsuario = (loginForm: any) => {
    this.usuarioService.loginUsuario(loginForm).then((success: any) => {

    }, (error: any) => {

    });
  }

}
