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
  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateTo = (url: string): void => {
    this.router.navigateByUrl(url);
  }

}
