import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ResponseHandlerInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((success) => {
        if (success instanceof HttpResponse) {
          if (success.status === 200) {
            if (
              success.url?.includes('login') ||
              success.url?.includes('register') ||
              success.url?.includes('dislike') || 
              (success.url?.includes('like') && success.body.message !== undefined) ||
              (success.url?.includes('create') && success.body.message !== undefined) ||
              (success.url?.includes('update') && success.body.message !== undefined)||
              success.url?.includes('delete')
            ) {
              this.toastr.success(success.body.message, 'Success');
            }
          }
        }
      }),
      catchError((err) => {
        this.toastr.error(err.error.message, 'Error');
        throw err;
      })
    );
  }
}
