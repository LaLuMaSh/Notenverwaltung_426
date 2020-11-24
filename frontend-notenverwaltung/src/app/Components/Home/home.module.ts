import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent,
  ]
})

export class HomeModule { }
