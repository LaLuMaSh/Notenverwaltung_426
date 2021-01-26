import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateExamComponent } from './create-exam/create-exam.component';
import {ListExamComponent} from './exam-list/list-exam.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateExamComponent
  },
  {
    path: '',
    component: ListExamComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class ExamRoutingModule { }
