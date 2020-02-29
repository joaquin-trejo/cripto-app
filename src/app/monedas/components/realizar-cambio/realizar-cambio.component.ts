import { Component, OnInit, OnDestroy } from '@angular/core';
import { Moneda } from '../../shared/models/moneda.model';
import { MonedasService } from '../../shared/services/monedas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-realizar-cambio',
  templateUrl: './realizar-cambio.component.html',
  styleUrls: ['./realizar-cambio.component.scss']
})
export class RealizarCambioComponent implements OnInit, OnDestroy {

  fromMonedaSeleccionada: any;
  toMonedaSeleccionada: any;
  valorConversion = 0;
  criptoMonedas: Moneda[];

  subscriptions: Subscription[] = [];

  constructor(private monedasService: MonedasService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.monedasService.obtenerCriptoMonedas(0, 100).subscribe((monedas: any) => {
      this.criptoMonedas = monedas;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  public selectCriptoMoneda = (type: string, moneda: Moneda): void => {
    if (type === 'from') {
      this.fromMonedaSeleccionada = moneda;
    } else {
      this.toMonedaSeleccionada = moneda;
    }
  }

}
