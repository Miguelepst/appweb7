import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './components/chile/chile.component';
import { ArgentinaComponent } from './components/argentina/argentina.component';
import { UruguayComponent } from './components/uruguay/uruguay.component';

const routes: Routes = [
  {
    path: 'chile',
    component: ChileComponent
  },
  {
    path: 'argentina',
    component: ArgentinaComponent
  },
  {
    path: 'uruguay',
    component: UruguayComponent
  }  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAmericaRoutingModule { }
