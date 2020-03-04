import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonedasComponent } from './monedas/monedas.component';
import { RealizarCambioComponent } from './monedas/components/realizar-cambio/realizar-cambio.component';
import { ListadoMonedasComponent } from './monedas/components/listado-monedas/listado-monedas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegisterComponent } from './usuario/register/register.component';
import { MisMonedasComponent } from './mis-monedas/mis-monedas.component';


const routes: Routes = [
  { path: '', redirectTo: 'monedas', pathMatch: 'full' },
  { path: 'misMonedas', component: MisMonedasComponent },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
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
