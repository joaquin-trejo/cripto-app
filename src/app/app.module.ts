import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonedasComponent } from './monedas/monedas.component';
import { RealizarCambioComponent } from './monedas/components/realizar-cambio/realizar-cambio.component';
import { ListadoMonedasComponent } from './monedas/components/listado-monedas/listado-monedas.component';

@NgModule({
  declarations: [
    AppComponent,
    MonedasComponent,
    RealizarCambioComponent,
    ListadoMonedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
