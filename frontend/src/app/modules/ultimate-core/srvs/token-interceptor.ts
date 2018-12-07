import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { RequestService } from './request.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public req: RequestService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log("TokenInterceptor.intercept");
        if (this.req.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.req.getToken()}`
                }
            });
        }
        return next.handle(request);
    }
}