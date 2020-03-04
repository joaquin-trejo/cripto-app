import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from '../shared/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Moneda } from 'src/app/monedas/shared/models/moneda.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../usuario.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  criptoMonedas: Moneda[];
  monedaSeleccionada: Moneda;
  errorMessages: any[];
  successMessage: string;
  errorBack: any;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      username: ['', Validators.required],
      clave: ['', Validators.required]
    });
    this.criptoMonedas = [
      {
        id_currency: 'USD',
        name: 'United States Dollar',
        price: '8485.79584493',
        crypto: '0'
      },
      {
        id_currency: 'EUR',
        name: 'Euro',
        price: '7694.91118639',
        crypto: '0'
      },
      {
        id_currency: 'COP',
        name: 'Colombian Peso',
        price: '29626072.14653907',
        crypto: '0'
      }
    ];
  }

  ngOnInit(): void { }

  public seleccionarMoneda = (criptoMoneda: Moneda): void => {
    this.monedaSeleccionada = criptoMoneda;
  }

  public registrarUsuario = (registerForm: any): void => {
    this.errorBack = '';
    this.usuarioService.registrarUsuario(registerForm, this.monedaSeleccionada)
      .subscribe((data:any): void => {
      console.log("data: ", JSON.stringify(data,null,4))
      this.successMessage = 'Usuario se registró exitosamente';
      this.registerForm.reset();
      this.monedaSeleccionada = null;
      }, (error: any): void => {
          console.log("error: ", error.error)
          this.errorBack = error.error.message;
      this.errorMessages = error.error.errors;
    });
  }

}
