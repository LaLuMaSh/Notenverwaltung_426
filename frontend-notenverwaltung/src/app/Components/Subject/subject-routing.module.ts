import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import {ListSubjectComponent} from './list-subject/list-subject.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateSubjectComponent
  },
  {
    path: '',
    component: ListSubjectComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class SubjectRoutingModule { }
