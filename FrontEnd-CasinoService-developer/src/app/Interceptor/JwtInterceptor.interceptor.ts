import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../core/service/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the current user and token from your AuthService
    const authToken = this.authService.getCurrentUser();
    console.log(authToken)
    if (authToken) {
      const modifiedRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);

  }
}
