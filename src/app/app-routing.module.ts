import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo1Component } from './features/modulo1/modulo1.component';
import { Pieza23BarraLateralComponent } from './features/modulo1/components/pieza23/pieza23-barra-lateral/pieza23-barra-lateral.component';

const routes: Routes = [

  /* { path: '', component: Pieza23BarraLateralComponent }, */
  /*  { path: '', component: Modulo1Component },
   { path: 'app-pieza23-barra-lateral', component: Pieza23BarraLateralComponent }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
