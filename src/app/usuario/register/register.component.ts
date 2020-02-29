import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../usuario.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: any;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      username: '',
      clave: '',
      moneda: ''
    });
  }

  ngOnInit(): void {
  }

  public registrarUsuario = (registerForm: any) => {
    this.usuarioService.registrarUsuario(registerForm).then((success: any) => {

    }, (error: any) => {

    });
  }

}
