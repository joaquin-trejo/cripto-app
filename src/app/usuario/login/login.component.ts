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

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  public ingresarUsuario = (loginForm: any) => {
    this.usuarioService.loginUsuario(loginForm)
    .subscribe((success: any) => {
      localStorage.setItem('token', success.token);
      localStorage.setItem('logueado', 'true');

      this.router.navigate(['/monedas']);
    }, (error: any) => {
      this.errorMessages = error.error.errors;
    });
  }

}
