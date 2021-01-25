import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ListClassComponent} from './list-class/list-class.component';

const routes: Routes = [
  {
    path: 'create',
    component: ListClassComponent
  },
  {
    path: '',
    component: ListClassComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class ClassRoutingModule { }
