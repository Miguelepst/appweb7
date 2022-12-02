import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleEuropaRoutingModule } from './module-europa-routing.module';
import { EuropaComponent } from './europa.component';
import { EspanaComponent } from './components/espana/espana.component';
import { FranciaComponent } from './components/francia/francia.component';
import { ItaliaComponent } from './components/italia/italia.component';
import { ItaliaAnidado1Component } from './components/italia/italia-anidado1/italia-anidado1.component';


@NgModule({
  declarations: [
    EuropaComponent,
    EspanaComponent,
    FranciaComponent,
    ItaliaComponent,
    ItaliaAnidado1Component,
  ],
  imports: [
    CommonModule,
    ModuleEuropaRoutingModule
  ]
})
export class ModuleEuropaModule { }
