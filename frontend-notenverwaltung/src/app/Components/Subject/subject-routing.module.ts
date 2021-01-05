import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: SubjectListComponent,
  },
  {
    path: 'create',
    component: CreateSubjectComponent
  },

  /**
   * always keep this route as the last route, so that not found routes redirect accordingly
   */
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class SubjectRoutingModule { }
