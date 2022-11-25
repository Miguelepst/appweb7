import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Pieza23BarraLateralComponent } from './components/pieza23/pieza23-barra-lateral/pieza23-barra-lateral.component';

/*  */


import { Pieza24PadreComponent } from './components/pieza24/pieza24-padre/pieza24-padre.component';
import { Pieza25PadreComponent } from './components/pieza25/pieza25-padre/pieza25-padre.component';
import { Pieza23Pais1Component } from './components/pieza23/pieza23-pais1/pieza23-pais1.component';
import { Pieza23Pais2Component } from './components/pieza23/pieza23-pais2/pieza23-pais2.component';
import { Pieza23Pais3Component } from './components/pieza23/pieza23-pais3/pieza23-pais3.component';
import { Pieza26PadreComponent } from './components/pieza26/pieza26-padre/pieza26-padre.component';
import { Pieza27PadreComponent } from './components/pieza27/pieza27-padre/pieza27-padre.component';
import { Pieza28PadreComponent } from './components/pieza28/pieza28-padre/pieza28-padre.component';
import { Pieza29PadreComponent } from './components/pieza29/pieza29-padre/pieza29-padre.component';
import { Pieza30Component } from './components/pieza30/pieza30/pieza30.component';
import { Pieza31PComponent } from './components/pieza31/pieza31-p/pieza31-p.component';


const routes: Routes = [


  /* { path: '', component: Modulo1Component }, */
  { path: 'app-pieza23-barra-lateral', component: Pieza23BarraLateralComponent },
  { path: 'app-pieza24-padre', component: Pieza24PadreComponent },
  { path: 'app-pieza25-padre', component: Pieza25PadreComponent },
  { path: 'app-pieza23-barra-lateral/app-pieza23-pais1', component: Pieza23Pais1Component },
  { path: 'app-pieza23-barra-lateral/app-pieza23-pais2', component: Pieza23Pais2Component },
  { path: 'app-pieza23-barra-lateral/app-pieza23-pais3', component: Pieza23Pais3Component },
  { path: 'app-pieza26-padre', component: Pieza26PadreComponent },
  { path: 'app-pieza27-padre', component: Pieza27PadreComponent },
  { path: 'app-pieza28-padre', component: Pieza28PadreComponent },
  { path: 'app-pieza29-padre', component: Pieza29PadreComponent },
  { path: 'app-pieza30', component: Pieza30Component },
  { path: 'app-pieza31-p', component: Pieza31PComponent },


















];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Modulo1RoutingModule { }
