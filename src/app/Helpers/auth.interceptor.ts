import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../Services/token-storage.service';

const token_header_key ='Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.GetToken();
    if(token != null){
      authReq = req.clone({headers: req.headers.set(token_header_key, 'Bearer ' + token)});
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
