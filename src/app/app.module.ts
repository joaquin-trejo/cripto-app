import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { MonedasComponent } from './monedas/monedas.component';
import { RealizarCambioComponent } from './monedas/components/realizar-cambio/realizar-cambio.component';
import { ListadoMonedasComponent } from './monedas/components/listado-monedas/listado-monedas.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NvbarComponent } from './shared/components/nvbar/nvbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegisterComponent } from './usuario/register/register.component';
import { MisMonedasComponent } from './mis-monedas/mis-monedas.component';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MonedasComponent,
    RealizarCambioComponent,
    ListadoMonedasComponent,
    FooterComponent,
    NvbarComponent,
    UsuarioComponent,
    LoginComponent,
    RegisterComponent,
    MisMonedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VirtualScrollerModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
