import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.scss']
})
export class NvbarComponent implements OnInit {

  showCerrarSesion: boolean;
  CERRAR_SESION: Observable<any>;
  LOGIN_SESION: Observable<any>;
  showMisMonedas = false;


  constructor(private router: Router) {
    this.CERRAR_SESION = fromEvent(window, 'CERRAR_SESION');
    this.LOGIN_SESION = fromEvent(window, 'LOGIN_SESION');
  }

  ngOnInit(): void {
    this.showCerrarSesion = localStorage.getItem('logueado') === 'true';

    this.CERRAR_SESION.subscribe((): void => {
      this.showCerrarSesion = false;
      this.showMisMonedas = false;
    });

    this.LOGIN_SESION.subscribe((): void => {
      this.showCerrarSesion = true;
      this.showMisMonedas = true;
    });
  }

  public cerrarSesion = (): void => {
    this.limpiarLocalStorage();
    window.dispatchEvent(new CustomEvent('CERRAR_SESION'));
    this.router.navigate(['/usuario']);
  }

  private limpiarLocalStorage = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('logueado');
    localStorage.removeItem('fromListado');
    localStorage.removeItem('username');
  }

}
