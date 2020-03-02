import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MisMonedasService } from './shared/services/mis-monedas.service';

@Component({
  selector: 'app-mis-monedas',
  templateUrl: './mis-monedas.component.html',
  styleUrls: ['./mis-monedas.component.scss']
})
export class MisMonedasComponent implements OnInit {

  selectedTablistadoMonedas = true;
  usuarioLogueado: boolean;
  subscription: Subscription[] = [];
  misMonedas: any[];

  constructor(private misMonedasService: MisMonedasService) { }

  ngOnInit(): void {
    this.usuarioLogueado = Boolean(localStorage.getItem('logueado'));
    if (this.usuarioLogueado) {
      this.subscription.push(this.misMonedasService.getCriptoMonedasByUser()
      .subscribe((response: any) => {
        console.log('response', response);
        this.misMonedas = response;
      }, (error: any) => {
        console.log('error', error);
      }));
    }
  }

  public seleccionarTab = async (tab: string): Promise<void> => {
    this.selectedTablistadoMonedas = tab === 'listado';
    this.misMonedas = await this.getMonedas(tab);
  }

  private getMonedas = async (tab: string): Promise<any> => {
    if (tab === 'listado') {
      return await this.misMonedasService.getCriptoMonedasByUser().toPromise();
    }
    return await this.misMonedasService.getTop3Monedas().toPromise();
  }

}
