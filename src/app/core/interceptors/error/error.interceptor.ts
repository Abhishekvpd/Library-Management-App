import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _snackbar: SnackbarService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = this.handleError(error);
        this._snackbar.openSnackBar(errorMessage, 'snackbar-error');
        // this.loader.hideLoader();
        return throwError(errorMessage);
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage;
    console.log(error)
    if (error.status === 401) {
      if (localStorage.getItem('token')) {
        localStorage.clear();
      }
      errorMessage = 'Restricted Access';
      this.router.navigate(['']);
    } else if (error.status === 500 || error.status === 404) {
      errorMessage = 'Something went wrong';
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.status !== 0) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Something went wrong';
    }
    return errorMessage;
  }
}
