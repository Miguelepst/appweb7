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



@NgModule({
  declarations: [
    Modulo1Component,
    Pieza23BarraLateralComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    Pieza23BarraLateralComponent,

  ]
})
export class Modulo1Module { }
