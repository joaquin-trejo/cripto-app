import { Component, OnInit } from '@angular/core';
import { Moneda } from '../../shared/models/moneda.model';
import { MonedasService } from '../../shared/services/monedas.service';

@Component({
  selector: 'app-realizar-cambio',
  templateUrl: './realizar-cambio.component.html',
  styleUrls: ['./realizar-cambio.component.scss']
})
export class RealizarCambioComponent implements OnInit {
  fromMonedaSeleccionada: any;
  toMonedaSeleccionada: any;
  valorConversion = 0;
  criptoMonedas: Moneda[];

  constructor(private monedasService: MonedasService) { }

  ngOnInit(): void {
    this.criptoMonedas = this.monedasService.obtenerCriptoMonedas();
  }

  public selectCriptoMoneda = (type: string, moneda: Moneda): void => {
    if (type === 'from') {
      this.fromMonedaSeleccionada = moneda;
    } else {
      this.toMonedaSeleccionada = moneda;
    }
  }

}
