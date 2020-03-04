import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MisMonedasService } from './shared/services/mis-monedas.service';
import { Router } from '@angular/router';

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
  errorMessageToken: string;
  username: string;

  constructor(
    private misMonedasService: MisMonedasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioLogueado = localStorage.getItem('logueado') === 'true';
    this.username = localStorage.getItem('username');
    if (this.usuarioLogueado) {
      this.subscription.push(this.misMonedasService.getCriptoMonedasByUser()
      .subscribe((response: any) => {
        this.misMonedas = response;
      }, (error: any) => {}));
    }
  }

  public seleccionarTab = async (tab: string): Promise<void> => {
    this.selectedTablistadoMonedas = tab === 'listado';
    this.misMonedas = await this.getMonedas(tab);
  }

  private getMonedas = async (tab: string): Promise<any> => {
    if (tab === 'listado') {
      this.subscription.push(this.misMonedasService.getCriptoMonedasByUser()
      .subscribe((response: any) => {
        this.misMonedas = response;
      }, (error: any) => {
        this.errorMessageToken = error.error.message;
        setTimeout((): void => {
          this.redirecTo(error.status);
        }, 2000);
      }));
    } else {
      this.subscription.push(this.misMonedasService.getTop3Monedas()
      .subscribe((response: any) => {
        this.misMonedas = response;
      }, (error: any) => {
        this.errorMessageToken = error.error.message;
        setTimeout((): void => {
          this.redirecTo(error.status);
        }, 2000);
      }));
    }
  }

  private redirecTo = (status: number): void => {
    if (status === 403 || status === 401) {
      this.router.navigate(['/usuario']);
    }
  }

}
