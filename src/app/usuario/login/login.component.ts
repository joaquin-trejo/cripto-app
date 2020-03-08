import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../usuario.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessages: any[];
  errorMessage: string;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  public ingresarUsuario = (loginForm: any) => {
    this.errorMessage = '';
    this.errorMessages = [];
    this.usuarioService.loginUsuario(loginForm)
    .subscribe((success: any) => {
      localStorage.setItem('token', success.token);
      localStorage.setItem('username', success.usuario.username);
      localStorage.setItem('logueado', 'true');
      window.dispatchEvent(new CustomEvent('LOGIN_SESION'));
      this.router.navigate(['/monedas']);
    }, (error: any) => {
      if (error.status === 404 || error.status === 400) {
        this.errorMessage = error.error.message;
      } else {
        this.errorMessages = error.error.errors;
      }
    });
  }

}
