import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: environment.HOST_URL + request.url,
    });
    request = this.addAuthenticationToken(request);
    return next.handle(request);
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    const token = localStorage.getItem('token');

    const publicUrls =
      request.url.endsWith('login') || request.url.endsWith('register');

    if (token && !publicUrls) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return request;
  }
}
