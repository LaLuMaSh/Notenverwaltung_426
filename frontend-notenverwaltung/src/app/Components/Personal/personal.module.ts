import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {ListPersonalExamComponent} from './personal-exam-list/list-personal-exam.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {PersonalOverviewComponent} from './personal-overview/personal-overview.component';
import {PersonalRoutingModule} from './personal-routing.module';
import {CreatePersonalExamComponent} from './create-personal-exam/create-personal-exam.component';

@NgModule({
  declarations: [
    PersonalOverviewComponent,
    ListPersonalExamComponent,
    CreatePersonalExamComponent
  ],
  imports: [
    MatButtonModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TranslateModule,
    MatExpansionModule,
    CommonModule,
    MatSelectModule,
    PersonalRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})

export class PersonalModule { }
