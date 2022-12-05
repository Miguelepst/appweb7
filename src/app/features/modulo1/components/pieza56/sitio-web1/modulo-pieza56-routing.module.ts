import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/paginas/inicio/inicio.component';
import { MapaComponent } from './components/paginas/mapa/mapa.component';
import { ContactoComponent } from './components/paginas/contacto/contacto.component';
import { AcercaDeComponent } from './components/paginas/acerca-de/acerca-de.component';
import { Pagina404Component } from './components/paginas/pagina404/pagina404.component';

const routes: Routes = [

    {
    path: '',
    component: InicioComponent
  },
  {
    path: 'app-pieza56/inicio',
    component: InicioComponent
  },
  { /* path: 'app-pieza56/mapa', */
    path: 'app-pieza56/mapa',
    component: MapaComponent
  },
  {
    path: 'app-pieza56/contacto',
    component: ContactoComponent
  },
  {
    path: 'app-pieza56/acercade',
    component: AcercaDeComponent
  },
  {
    path: 'app-pieza56/pagina404',
    component: Pagina404Component
  },
  {
    path: '**',
    redirectTo: 'app-pieza56/pagina404'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPieza56RoutingModule { }
