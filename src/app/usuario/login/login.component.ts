import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../usuario.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessages: any[];

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  public ingresarUsuario = (loginForm: any) => {
    this.usuarioService.loginUsuario(loginForm).subscribe((success: any) => {
      console.log('success: ', success);
    }, (error: any) => {
      this.errorMessages = error.error.errors;
    });
  }

}
