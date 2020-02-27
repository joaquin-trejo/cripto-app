import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonedasService } from './shared/services/monedas.service';
import { Moneda } from './shared/models/moneda.model';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.scss']
})
export class MonedasComponent implements OnInit {

  criptoMonedas: Moneda[];
  constructor(private router: Router, private monedasService: MonedasService) { }

  ngOnInit(): void {
    this.criptoMonedas = this.monedasService.obtenerCriptoMonedas();
  }

  navigateTo = (url: string): void => {
    this.router.navigateByUrl(url);
  }

}
