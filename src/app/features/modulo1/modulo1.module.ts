// import { BrowserModule } from '@angular/platform-browser'; //

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
import { MatFormFieldModule } from '@angular/material/form-field';
import { Pieza27PadreComponent } from './components/pieza27/pieza27-padre/pieza27-padre.component'

import { MatCheckboxModule } from '@angular/material/checkbox';
import { Pieza28PadreComponent } from './components/pieza28/pieza28-padre/pieza28-padre.component'

import { MatSelectModule } from '@angular/material/select';
import { Pieza29PadreComponent } from './components/pieza29/pieza29-padre/pieza29-padre.component'

import { MatSliderModule } from '@angular/material/slider';
import { Pieza30Component } from './components/pieza30/pieza30/pieza30.component'


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Pieza31PComponent } from './components/pieza31/pieza31-p/pieza31-p.component';

import { MatTabsModule } from '@angular/material/tabs'

import { MatTableModule } from '@angular/material/table';
import { Pieza32PComponent } from './components/pieza32/pieza32-p/pieza32-p.component';
import { Pieza33PComponent } from './components/pieza33/pieza33-p/pieza33-p.component'

import { MatPaginatorModule } from '@angular/material/paginator'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pieza34PComponent } from './components/pieza34/pieza34-p/pieza34-p.component'

import { MatSortModule } from '@angular/material/sort';
import { Pieza35PComponent } from './components/pieza35/pieza35-p/pieza35-p.component';
import { Pieza36PComponent } from './components/pieza36/pieza36-p/pieza36-p.component';
import { DialogoarticuloComponent } from './components/pieza36/pieza36-components/dialogoarticulo/dialogoarticulo.component'

import { MatDialogModule } from '@angular/material/dialog';
import { Pieza37PComponent } from './components/pieza37/pieza37-p/pieza37-p.component'
import { Modulo2Module } from '../modulo2/modulo2.module';
import { Pieza38PComponent } from './components/pieza38/pieza38-p/pieza38-p.component';

import { MatMenuModule } from '@angular/material/menu';
import { Pieza39PComponent } from './components/pieza39/pieza39-p/pieza39-p.component'

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { Pieza40PComponent } from './components/pieza40/pieza40-p/pieza40-p.component';
import { Pieza41PComponent } from './components/pieza41/pieza41-p/pieza41-p.component'

import { MatExpansionModule } from '@angular/material/expansion';
import { Pieza42PComponent } from './components/pieza42/pieza42-p/pieza42-p.component';
import { Pieza43PComponent } from './components/pieza43/pieza43-p/pieza43-p.component';
import { Pieza44PComponent } from './components/pieza44/pieza44-p/pieza44-p.component';
import { Pieza45PComponent } from './components/pieza45/pieza45-p/pieza45-p.component';
import { Pieza45HComponent } from './components/pieza45/pieza45-h/pieza45-h.component';
import { Pieza46PComponent } from './components/pieza46/pieza46-p/pieza46-p.component';
import { Pieza46AComponent } from './components/pieza46/pieza46-a/pieza46-a.component';
import { Pieza47PComponent } from './components/pieza47/pieza47-p/pieza47-p.component';
import { Pieza47AComponent } from './components/pieza47/pieza47-a/pieza47-a.component';
import { TarjetaComponent } from './components/pieza48/components/tarjeta/tarjeta.component';
import { Pieza48Component } from './components/pieza48/pieza48.component';




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
    Pieza27PadreComponent,
    Pieza28PadreComponent,
    Pieza29PadreComponent,
    Pieza30Component,
    Pieza31PComponent,
    Pieza32PComponent,
    Pieza33PComponent,
    Pieza34PComponent,
    Pieza35PComponent,
    Pieza36PComponent,
    DialogoarticuloComponent,
    Pieza37PComponent,
    Pieza38PComponent,
    Pieza39PComponent,
    Pieza40PComponent,
    Pieza41PComponent,
    Pieza42PComponent,
    Pieza43PComponent,
    Pieza44PComponent,
    Pieza45PComponent,
    Pieza45HComponent,
    Pieza46PComponent,
    Pieza46AComponent,
    Pieza47PComponent,
    Pieza47AComponent,
    TarjetaComponent,
    Pieza48Component,
    





  ],
  imports: [
    //    BrowserModule,   //
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
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatDialogModule,
    Modulo2Module,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,





  ],
  exports: [
    ComponentModulo1,

  ]
})
export class Modulo1Module { }
