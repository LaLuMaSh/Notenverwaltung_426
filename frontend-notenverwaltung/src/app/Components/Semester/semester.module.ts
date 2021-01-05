import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SemesterRoutingModule } from './semester-routing.module';
import { CreateSemesterComponent } from './create-semester/create-semester.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreateSemesterComponent,
  ],
  imports: [
    SemesterRoutingModule,
    MatButtonModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TranslateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CreateSemesterComponent,
  ]
})

export class SemesterModule { }
