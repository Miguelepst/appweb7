import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModulo1 } from './modulo1.component';
import { Pieza23BarraLateralComponent } from './components/pieza23/pieza23-barra-lateral/pieza23-barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

/*  */
import { Modulo1RoutingModule } from './modulo1-routing.module';
import { Pieza24PadreComponent } from './components/pieza24/pieza24-padre/pieza24-padre.component';
import { Pieza25PadreComponent } from './components/pieza25/pieza25-padre/pieza25-padre.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Pieza23Pais1Component } from './components/pieza23/pieza23-pais1/pieza23-pais1.component';
import { Pieza23Pais2Component } from './components/pieza23/pieza23-pais2/pieza23-pais2.component';
import { Pieza23Pais3Component } from './components/pieza23/pieza23-pais3/pieza23-pais3.component';
import { Pieza26PadreComponent } from './components/pieza26/pieza26-padre/pieza26-padre.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'








@NgModule({
  declarations: [
    ComponentModulo1,
    Pieza23BarraLateralComponent,
    Pieza24PadreComponent,
    Pieza25PadreComponent,
    Pieza23Pais1Component,
    Pieza23Pais2Component,
    Pieza23Pais3Component,
    Pieza26PadreComponent,




  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    Modulo1RoutingModule,
    MatInputModule,   //
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,


  ],
  exports: [
    ComponentModulo1,

  ]
})
export class Modulo1Module { }
