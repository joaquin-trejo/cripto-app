import { Component, OnInit } from '@angular/core';
import { MonedasService } from '../../shared/services/monedas.service';
import { Moneda } from '../../shared/models/moneda.model';
import { IPageInfo } from 'ngx-virtual-scroller';
import { Router } from '@angular/router';
import { MisMonedasService } from 'src/app/mis-monedas/shared/services/mis-monedas.service';

@Component({
  selector: 'app-listado-monedas',
  templateUrl: './listado-monedas.component.html',
  styleUrls: ['./listado-monedas.component.scss']
})

export class ListadoMonedasComponent implements OnInit {

  buffer: Moneda[] = [];
  totalPrices: number;
  loading: boolean;
  doNotContinueFetching: boolean;
  errorMessage: string;
  successMessage: string;
  showGuardarMoneda: boolean;

  constructor(
    private monedasService: MonedasService,
    private misMonedasService: MisMonedasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showGuardarMoneda = localStorage.getItem('logueado') === 'true';
    localStorage.removeItem('moneda');
    localStorage.setItem('fromListado', JSON.stringify(false));
  }

  public convertirMoneda = (moneda: Moneda): void => {
    localStorage.setItem('moneda', JSON.stringify(moneda));
    localStorage.setItem('fromListado', JSON.stringify(true));
    window.dispatchEvent(new CustomEvent('SELECTED_FIRST_TAB'));
    this.router.navigate(['/monedas/realizarCambio']);
  }

  public guardarMoneda = (moneda: Moneda): void => {
    this.misMonedasService.saveMonedaByUser(moneda)
    .subscribe((): void => {
      this.successMessage = 'Se guardo la moneda con exito!';
      setTimeout((): void => {
        this.successMessage = null;
      }, 2000);
    }, (error: any): void => {
      this.errorMessage = error.error.message;
    });
  }

  public fetchMore(event: IPageInfo): void {
    if (!this.doNotContinueFetching) {
      if (event.endIndex !== this.buffer.length - 1) {
        return;
      }
      this.loading = true;
      this.doNotContinueFetching = true;
      // add another 20 items
      const END_INDEX = this.buffer.length + 20;
      if (this.totalPrices !== this.buffer.length) {

        this.fetchNextChunk(this.buffer.length, END_INDEX).then((chunk: any): void => {

          this.totalPrices = chunk.totalPrices;
          this.buffer = this.buffer.concat(chunk.prices);
          this.loading = false;
          this.doNotContinueFetching = false;

        }, (): void => {
          this.loading = false;
        });

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
