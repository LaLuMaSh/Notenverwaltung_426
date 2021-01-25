import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {ListSubjectComponent} from './list-subject/list-subject.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    CreateSubjectComponent,
    ListSubjectComponent,
  ],
  imports: [
    SubjectRoutingModule,
    MatButtonModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TranslateModule,
    MatExpansionModule,
    CommonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CreateSubjectComponent,
  ]
})

export class SubjectModule { }
