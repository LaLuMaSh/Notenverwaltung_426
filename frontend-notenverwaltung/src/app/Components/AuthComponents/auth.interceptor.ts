import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    if (token) {
      const newReq =   req.clone({
        headers: req.headers.set('Authorization', `${token}`)
      });

      return next.handle(newReq);
    } else {
      this.router.navigate(['login']);
    }

    return next.handle(req);
  }
}
