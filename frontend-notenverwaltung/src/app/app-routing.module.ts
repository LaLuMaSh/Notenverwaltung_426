import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './Components/AuthComponents/AuthGuard/CanActivateViaAuthGuard'
import { LoginComponent } from './Components/AuthComponents/login/login.component';
import { RegisterComponent } from './Components/AuthComponents/register/register.component';

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
        path: 'subject',
        loadChildren: () => import('./Components/Subject/subject.module')
          .then(mod => mod.SubjectModule)
      }
      // TODO: Insert Children Here
    ],

  },
  {
    path: 'login',
    component: LoginComponent,
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
