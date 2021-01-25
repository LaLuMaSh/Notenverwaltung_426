import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateSemesterComponent } from './create-semester/create-semester.component';
import {ListSemesterComponent} from './list-semester/list-semester.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateSemesterComponent
  },
  {
    path: '',
    component: ListSemesterComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class SemesterRoutingModule { }
