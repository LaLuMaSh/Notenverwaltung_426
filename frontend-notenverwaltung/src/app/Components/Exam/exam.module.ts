import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ExamRoutingModule } from './exam-routing.module';
import { CreateExamComponent } from './create-exam-subject/create-exam.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {ListExamComponent} from './exam-list-subject/list-exam.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    CreateExamComponent,
    ListExamComponent,
  ],
  imports: [
    ExamRoutingModule,
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
    CreateExamComponent,
  ]
})

export class ExamModule { }
