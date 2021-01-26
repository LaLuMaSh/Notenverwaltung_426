import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ListPersonalExamComponent} from './personal-exam-list/list-personal-exam.component';
import {PersonalOverviewComponent} from './personal-overview/personal-overview.component';
import {CreatePersonalExamComponent} from './create-personal-exam/create-personal-exam.component';

const routes: Routes = [
  {
    path: 'exam',
    component: ListPersonalExamComponent
  },
  {
    path: 'exam/create',
    component: CreatePersonalExamComponent
  },
  {
    path: '',
    component: PersonalOverviewComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class PersonalRoutingModule { }
