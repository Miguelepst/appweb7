import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo2RoutingModule } from './modulo2-routing.module';
import { Pieza1Component } from './components/pieza1/pieza1.component';
import { JuegodadosComponent } from './components/pieza1/juegodados/juegodados.component';
import { AcercadeComponent } from './components/pieza1/acercade/acercade.component';
import { DadoComponent } from './components/pieza1/dado/dado.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'






@NgModule({
  declarations: [
    Pieza1Component,
    JuegodadosComponent,
    AcercadeComponent,
    DadoComponent
  ],
  imports: [
    CommonModule,
    Modulo2RoutingModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
    Pieza1Component,
  ]
})
export class Modulo2Module { }
