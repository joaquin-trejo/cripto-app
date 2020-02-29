import { Component, OnInit } from '@angular/core';
import { Moneda } from '../../shared/models/moneda.model';
import { MonedasService } from '../../shared/services/monedas.service';
import { IPageInfo } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-realizar-cambio',
  templateUrl: './realizar-cambio.component.html',
  styleUrls: ['./realizar-cambio.component.scss']
})
export class RealizarCambioComponent implements OnInit {

  fromMonedaSeleccionada: any;
  toMonedaSeleccionada: any;
  valorConversion = 0;

  loading: boolean;
  doNotContinueFetching: boolean;

  controlConfigDropdowns: any = {
    buffer: {
      from: [],
      to: []
    }
  };

  constructor(private monedasService: MonedasService) { }

  ngOnInit(): void {}

  public selectCriptoMoneda = (type: string, moneda: Moneda): void => {
    if (type === 'from') {
      this.fromMonedaSeleccionada = moneda;
    } else {
      this.toMonedaSeleccionada = moneda;
    }
  }

  public fetchMore(event: IPageInfo, bufferType: string) {
    if (!this.doNotContinueFetching) {
      const BUFFER = this.controlConfigDropdowns.buffer[bufferType];
      if (event.endIndex !== BUFFER.length - 1) {
        return;
      }
      this.loading = true;
      this.doNotContinueFetching = true;
      // add another 20 items
      const END_INDEX = BUFFER.length + 20;
      if (this.controlConfigDropdowns.totalPrices !== BUFFER.length) {

        this.fetchNextChunk(BUFFER.length, END_INDEX).then((chunk: any) => {

          this.controlConfigDropdowns.totalPrices = chunk.totalPrices;
          this.controlConfigDropdowns.buffer[bufferType] = BUFFER.concat(chunk.prices);
          this.loading = false;
          this.doNotContinueFetching = false;

        }, () => this.loading = false);

      } else {
        this.loading = false;
      }
    }
  }

  private fetchNextChunk = (startIndex: number, endIndex: number): Promise<Moneda[]> => {
    return new Promise((resolve, reject) => {
      this.monedasService.obtenerCriptoMonedas(startIndex, endIndex).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

}
