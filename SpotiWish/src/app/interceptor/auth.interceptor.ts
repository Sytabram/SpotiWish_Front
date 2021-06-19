import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class TokenInterceptor implements HttpInterceptor
{
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${ localStorage.getItem("token") }`
      }
    });
    return next.handle(request);
  }
}
