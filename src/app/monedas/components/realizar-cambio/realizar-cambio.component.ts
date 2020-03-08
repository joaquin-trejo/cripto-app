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

  fromMonedaSeleccionada: Moneda;
  toMonedaSeleccionada: Moneda;
  valorToConvertir: number;
  resultadoConversion: number;
  loading: boolean;
  controlConfigDropdowns: any;

  constructor(private monedasService: MonedasService) {
    this.fromMonedaSeleccionada = {
      id_currency: 'BTCN',
      name: 'BitcoiNote',
      price: '6604907.03829823',
      crypto: '1'
    };
    this.toMonedaSeleccionada = {
      id_currency: 'USD',
      name: 'United States Dollar',
      price: '8603.84063081',
      crypto: '0'
    };
    this.resultadoConversion = 0;
    this.controlConfigDropdowns = {
      buffer: {
        from: [],
        to: []
      }
    };
  }

  ngOnInit(): void {
    if (this.isFromListado()) {
      this.fromMonedaSeleccionada = JSON.parse(localStorage.getItem('moneda'));
    }
  }

  public selectCriptoMoneda = (type: string, moneda: Moneda): void => {
    console.log("moneda seleccionada: ", JSON.stringify(moneda,null,4))
    if (type === 'from') {
      this.fromMonedaSeleccionada = moneda;
    } else {
      this.toMonedaSeleccionada = moneda;
    }
    this.convertirModena();
  }

  public convertirModena = async () => {
    if (this.isValidConvertir(this.valorToConvertir, this.fromMonedaSeleccionada, this.toMonedaSeleccionada)) {
      const { id_currency: idCurrencyFrom } = this.fromMonedaSeleccionada;
      const { id_currency: idCurrencyTo } = this.toMonedaSeleccionada;
      const RESULTADO = await this.monedasService.convertirMoneda(this.valorToConvertir, idCurrencyFrom, idCurrencyTo).toPromise();
      this.resultadoConversion = RESULTADO.to_quantity;
    }
  }

  public relizarCambio = (fromMoneda: Moneda, toMoneda: Moneda) => {
    this.toMonedaSeleccionada = fromMoneda;
    this.fromMonedaSeleccionada = toMoneda;
    this.convertirModena();
  }

  public myTrackByFunction(index: number, complexItem: Moneda): string {
    return complexItem.id_currency;
  }

  private isFromListado = (): boolean => localStorage.getItem('fromListado') === 'true';

  private isValidConvertir = (valorToConvertir: number, fromMonedaSeleccionada: any, toMonedaSeleccionada: any): boolean => {
    return valorToConvertir && fromMonedaSeleccionada && toMonedaSeleccionada;
  }

  /**
   *
   * @param event
   * @param bufferType
   */
  public fetchMore(event: IPageInfo, bufferType: string) {
    const BUFFER = this.controlConfigDropdowns.buffer[bufferType];
    if (event.endIndex !== BUFFER.length - 1) {
      return;
    }
    this.loading = true;
    // add another 20 items
    const END_INDEX = BUFFER.length + 20;
    if (this.controlConfigDropdowns.totalPrices !== BUFFER.length) {

      this.fetchNextChunk(BUFFER.length, END_INDEX).then((chunk: any) => {

        this.controlConfigDropdowns.totalPrices = chunk.totalPrices;
        this.controlConfigDropdowns.buffer[bufferType] = BUFFER.concat(chunk.prices);
        this.loading = false;

      }, () => this.loading = false);

    } else {
      this.loading = false;
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
