import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPieza56RoutingModule } from './modulo-pieza56-routing.module';
import { InicioComponent } from './components/paginas/inicio/inicio.component';
import { MapaComponent } from './components/paginas/mapa/mapa.component';
import { ContactoComponent } from './components/paginas/contacto/contacto.component';
import { AcercaDeComponent } from './components/paginas/acerca-de/acerca-de.component';
import { Pagina404Component } from './components/paginas/pagina404/pagina404.component';


@NgModule({
  declarations: [
    InicioComponent,
    MapaComponent,
    ContactoComponent,
    AcercaDeComponent,
    Pagina404Component
  ],
  imports: [
    CommonModule,
    ModuloPieza56RoutingModule
  ]
})
export class ModuloPieza56Module { }
