import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonedasComponent } from './monedas/monedas.component';
import { RealizarCambioComponent } from './monedas/components/realizar-cambio/realizar-cambio.component';
import { ListadoMonedasComponent } from './monedas/components/listado-monedas/listado-monedas.component';


const routes: Routes = [
  { path: '', redirectTo: 'monedas', pathMatch: 'full' },
  {
    path: 'monedas',
    component: MonedasComponent,
    children: [
      { path: '', redirectTo: 'realizarCambio', pathMatch: 'full' },
      { path: 'realizarCambio', component: RealizarCambioComponent },
      { path: 'listadoMonedas', component: ListadoMonedasComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
