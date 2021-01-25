import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ClassRoutingModule } from './class-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {ClassComponent} from './list-class/class.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ClassComponent,
    ClassComponent,
  ],
  imports: [
    ClassRoutingModule,
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
    ClassComponent,
  ]
})

export class ClassModule { }
