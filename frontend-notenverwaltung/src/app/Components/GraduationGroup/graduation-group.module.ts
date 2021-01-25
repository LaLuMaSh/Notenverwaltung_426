import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { GraduationGroupRoutingModule } from './graduation-group-routing.module';
import { CreateGraduationGroupComponent } from './create-graduation-group/create-graduation-group.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {ListGraduationGroupComponent} from './list-graduation-group/list-graduation-group.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    CreateGraduationGroupComponent,
    ListGraduationGroupComponent,
  ],
  imports: [
    GraduationGroupRoutingModule,
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
    CreateGraduationGroupComponent,
  ]
})

export class GraduationGroupModule { }
