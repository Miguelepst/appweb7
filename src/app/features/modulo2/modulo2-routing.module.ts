import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegodadosComponent } from './components/pieza1/juegodados/juegodados.component';
import { AcercadeComponent } from './components/pieza1/acercade/acercade.component';

const routes: Routes = [

  {
    path: 'juegodados',
    component: JuegodadosComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }
