import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pieza23BarraLateralComponent } from './components/pieza23/pieza23-barra-lateral/pieza23-barra-lateral.component';
import { Modulo1Component } from './modulo1.component';


const routes: Routes = [
  /* { path: '', component: Pieza23BarraLateralComponent }, */

  { path: '', component: Modulo1Component },
  { path: 'app-pieza23-barra-lateral', component: Pieza23BarraLateralComponent },




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Modulo1RoutingModule { }
