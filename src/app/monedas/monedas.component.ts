import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from './shared/models/moneda.model';
import { Observable, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.scss']
})
export class MonedasComponent implements OnInit, OnDestroy {

  criptoMonedas: Moneda[];
  SELECTED_FIRST_TAB: Observable<any>;
  subscription: Subscription[] = [];

  selectedTabRealizarCambio = true;

  constructor(private router: Router) {
    this.SELECTED_FIRST_TAB = fromEvent(window, 'SELECTED_FIRST_TAB');
  }

  ngOnInit(): void {
    this.selectedTabRealizarCambio = this.router.url.includes('realizarCambio');
    this.subscription.push(this.SELECTED_FIRST_TAB.subscribe((): void => {
      this.selectedTabRealizarCambio = true;
    }));
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscription.map((subscription: any): void => {
      subscription.unsubscribe();
    });
  }

  navigateTo = (url: string): void => {
    this.selectedTabRealizarCambio = url.includes('realizarCambio');
    this.router.navigateByUrl(url);
  }

}
