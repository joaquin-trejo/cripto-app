import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from './shared/models/moneda.model';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.scss']
})
export class MonedasComponent implements OnInit {

  criptoMonedas: Moneda[];
  selectedTabRealizarCambio = true;
  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateTo = (url: string): void => {
    this.selectedTabRealizarCambio = url.includes('realizarCambio');
    this.router.navigateByUrl(url);
  }

}
