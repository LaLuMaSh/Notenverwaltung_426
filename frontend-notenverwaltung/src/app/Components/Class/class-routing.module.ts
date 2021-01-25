import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ClassComponent} from './list-class/class.component';

const routes: Routes = [
  {
    path: 'create',
    component: ClassComponent
  },
  {
    path: '',
    component: ClassComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class ClassRoutingModule { }
