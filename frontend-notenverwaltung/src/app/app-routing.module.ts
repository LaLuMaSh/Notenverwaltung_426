import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './Components/AuthComponents/AuthGuard/CanActivateViaAuthGuard'
import { LoginComponent } from './Components/AuthComponents/login/login.component';
import { RegisterComponent } from './Components/AuthComponents/register/register.component';
import {LogoutComponent} from './Components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [
       CanActivateViaAuthGuard // prohibits non-authenticated users to load any route -> redirects to login
    ],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./Components/Home/home.module')
          .then(mod => mod.HomeModule)
      },
      {
        path: 'semester',
        loadChildren: () => import('./Components/Semester/semester.module')
          .then(mod => mod.SemesterModule)
      },
      {
        path: 'group',
        loadChildren: () => import('./Components/GraduationGroup/graduation-group.module')
          .then(mod => mod.GraduationGroupModule)
      },
      {
        path: 'class',
        loadChildren: () => import('./Components/Class/class.module')
          .then(mod => mod.ClassModule)
      },
      {
        path: 'subject',
        loadChildren: () => import('./Components/Subject/subject.module')
          .then(mod => mod.SubjectModule)
      },
      {
        path: 'exam',
        loadChildren: () => import('./Components/Exam/exam.module')
          .then(mod => mod.ExamModule)
      },
      {
        path: 'personal',
        loadChildren: () => import('./Components/Personal/personal.module')
          .then(mod => mod.PersonalModule)
      }
      // TODO: Insert Children Here
    ],

  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  /**
   * Must be last listed Path, otherwise it overwrites 'userId' path etc.
   * Last path to check is wildcard!
   */
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ],
  providers: [
    CanActivateViaAuthGuard
  ]
})
export class AppRoutingModule { }
