import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './Components/AuthComponents/AuthGuard/CanActivateViaAuthGuard'
import { LoginComponent } from './Components/AuthComponents/login/login.component';

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
      }
      // TODO: Insert Children Here
    ],

  },
  {
    path: 'login',
    component: LoginComponent,
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
