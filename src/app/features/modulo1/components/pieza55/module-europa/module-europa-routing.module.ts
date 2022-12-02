import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanaComponent } from './components/espana/espana.component';
import { FranciaComponent } from './components/francia/francia.component';
import { ItaliaComponent } from './components/italia/italia.component';
import { ItaliaAnidado1Component } from './components/italia/italia-anidado1/italia-anidado1.component';

const routes: Routes = [
  {
    path: 'espana',
    component: EspanaComponent
  },
  {
    path: 'francia',
    component: FranciaComponent
  },
  {
    path: 'italia',
    component: ItaliaComponent
  },
    {             
    path: 'italia/italia-anidado1',
    component: ItaliaAnidado1Component
  }
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEuropaRoutingModule { }
