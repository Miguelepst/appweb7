import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modulo1Component } from './modulo1.component';
import { Pieza23BarraLateralComponent } from './components/pieza23/pieza23-barra-lateral/pieza23-barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Modulo1RoutingModule } from './modulo1-routing.module';
import { Pieza24PadreComponent } from './components/pieza24/pieza24-padre/pieza24-padre.component';


@NgModule({
  declarations: [
    Modulo1Component,
    Pieza23BarraLateralComponent,
    Pieza24PadreComponent
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

  ],
  exports: [
    Modulo1Component,

  ]
})
export class Modulo1Module { }
