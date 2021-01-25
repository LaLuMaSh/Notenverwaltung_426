import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ListClassComponent} from './list-class/list-class.component';
import {CreateClassComponent} from './create-class/create-class.component';
import {AddMemberComponent} from './add-member/add-member.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateClassComponent
  },
  {
    path: 'add-member',
    component: AddMemberComponent
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
