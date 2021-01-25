import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateGraduationGroupComponent } from './create-graduation-group/create-graduation-group.component';
import {ListGraduationGroupComponent} from './list-graduation-group/list-graduation-group.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateGraduationGroupComponent
  },
  {
    path: '',
    component: ListGraduationGroupComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class GraduationGroupRoutingModule { }
