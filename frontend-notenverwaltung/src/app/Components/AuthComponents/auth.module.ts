import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FlexModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})

export class AuthModule { }
