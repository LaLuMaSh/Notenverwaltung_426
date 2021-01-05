import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

@NgModule({
  declarations: [
    SubjectListComponent,
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})

export class SubjectModule { }
