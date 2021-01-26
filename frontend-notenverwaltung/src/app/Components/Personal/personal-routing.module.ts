import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ListPersonalExamComponent} from './personal-exam-list/list-personal-exam.component';
import {PersonalOverviewComponent} from './personal-overview/personal-overview.component';

const routes: Routes = [
  {
    path: 'exam',
    component: ListPersonalExamComponent
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
