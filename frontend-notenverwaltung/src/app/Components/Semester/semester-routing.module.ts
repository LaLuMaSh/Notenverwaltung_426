import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateSemesterComponent } from './create-semester/create-semester.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateSemesterComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class SemesterRoutingModule { }
