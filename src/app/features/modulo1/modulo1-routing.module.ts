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
import { Pieza32PComponent } from './components/pieza32/pieza32-p/pieza32-p.component';
import { Pieza33PComponent } from './components/pieza33/pieza33-p/pieza33-p.component';
import { Pieza34PComponent } from './components/pieza34/pieza34-p/pieza34-p.component';
import { Pieza35PComponent } from './components/pieza35/pieza35-p/pieza35-p.component';
import { Pieza36PComponent } from './components/pieza36/pieza36-p/pieza36-p.component';
import { Pieza37PComponent } from './components/pieza37/pieza37-p/pieza37-p.component';
import { Pieza38PComponent } from './components/pieza38/pieza38-p/pieza38-p.component';
import { Pieza39PComponent } from './components/pieza39/pieza39-p/pieza39-p.component';
import { Pieza40PComponent } from './components/pieza40/pieza40-p/pieza40-p.component';
import { Pieza41PComponent } from './components/pieza41/pieza41-p/pieza41-p.component';



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
  { path: 'app-pieza32-p', component: Pieza32PComponent },
  { path: 'app-pieza33-p', component: Pieza33PComponent },
  { path: 'app-pieza34-p', component: Pieza34PComponent },
  { path: 'app-pieza35-p', component: Pieza35PComponent },
  { path: 'app-pieza36-p', component: Pieza36PComponent },
  { path: 'app-pieza37-p', component: Pieza37PComponent },
  { path: 'app-pieza38-p', component: Pieza38PComponent },
  { path: 'app-pieza39-p', component: Pieza39PComponent },
  { path: 'app-pieza40-p', component: Pieza40PComponent },
  { path: 'app-pieza41-p', component: Pieza41PComponent },




































];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Modulo1RoutingModule { }
