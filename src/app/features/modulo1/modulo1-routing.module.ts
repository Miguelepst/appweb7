import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pieza23BarraLateralComponent } from './components/pieza23/pieza23-barra-lateral/pieza23-barra-lateral.component';
import { Modulo1Component } from './modulo1.component';
import { Pieza24PadreComponent } from './components/pieza24/pieza24-padre/pieza24-padre.component';
import { Pieza25PadreComponent } from './components/pieza25/pieza25-padre/pieza25-padre.component';


const routes: Routes = [


  /* { path: '', component: Modulo1Component }, */
  { path: 'app-pieza23-barra-lateral', component: Pieza23BarraLateralComponent },
  { path: 'app-pieza24-padre', component: Pieza24PadreComponent },
  { path: 'app-pieza25-padre', component: Pieza25PadreComponent },








];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Modulo1RoutingModule { }
