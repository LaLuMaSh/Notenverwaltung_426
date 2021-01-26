import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Components/AuthComponents/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthInterceptor } from './Components/AuthComponents/auth.interceptor';
import { SemesterModule } from './Components/Semester/semester.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {GraduationGroupModule} from './Components/GraduationGroup/graduation-group.module';
import {SubjectModule} from './Components/Subject/subject.module';
import {ClassModule} from './Components/Class/class.module';
import {ExamModule} from './Components/Exam/exam.module';
import {PersonalModule} from './Components/Personal/personal.module';
import { LogoutComponent } from './Components/logout/logout.component';

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SemesterModule,
    GraduationGroupModule,
    SubjectModule,
    ClassModule,
    ExamModule,
    PersonalModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // 'forRoot()' tells the translate module that this is the root module
    // therefore, a corresponding singleton is created
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [INTERCEPTORS],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
