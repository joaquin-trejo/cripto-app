import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonedasService } from '../../shared/services/monedas.service';
import { Moneda } from '../../shared/models/moneda.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-monedas',
  templateUrl: './listado-monedas.component.html',
  styleUrls: ['./listado-monedas.component.scss']
})
export class ListadoMonedasComponent implements OnInit, OnDestroy {

  criptoMonedas: Moneda[];

  subscriptions: Subscription[] = [];

  constructor(private monedasService: MonedasService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.monedasService.obtenerCriptoMonedas().subscribe((monedas: any) => {
      this.criptoMonedas = monedas.prices;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
