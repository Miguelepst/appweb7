import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAmericaRoutingModule } from './module-america-routing.module';
import { AmericaComponent } from './america.component';
import { ChileComponent } from './components/chile/chile.component';
import { ArgentinaComponent } from './components/argentina/argentina.component';
import { UruguayComponent } from './components/uruguay/uruguay.component';


@NgModule({
  declarations: [
    AmericaComponent,
    ChileComponent,
    ArgentinaComponent,
    UruguayComponent
  ],
  imports: [
    CommonModule,
    ModuleAmericaRoutingModule
  ]
})
export class ModuleAmericaModule { }
