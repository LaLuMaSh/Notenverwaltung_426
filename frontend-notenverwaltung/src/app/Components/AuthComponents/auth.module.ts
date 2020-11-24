import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent,
  ]
})

export class AuthModule { }
