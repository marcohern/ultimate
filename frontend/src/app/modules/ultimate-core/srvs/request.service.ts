import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { LoginResult } from '../models/login-result';
import { TokenServiceBase } from './token-service-base';
import { QueryStringBase } from './query-string-base';

@Injectable({
  providedIn: 'root'
})
export class RequestService extends QueryStringBase {

  constructor(private http:HttpClient) { 
    super();
    this.retrieveToken();
  }

  public login(username:string, password:string):Observable<LoginResult> {
    this.beforeBegin();
    return this.http.post<LoginResult>(this.oauth('/token'), 
    {
      grant_type:"password",
      client_id: environment.api.id,
      client_secret:environment.api.secret,
      username:username,
      password:password
    }, {
      headers: this.headers()
    })
    .pipe(
      finalize(() => { this.completed(); }),
      tap(() => {}, error => this.handleError("RequestService.login",error)),
    );
  }

  public logout():Observable<any> {
    this.beforeBegin();
    return this.http.post(this.url('/logout'), {})
    .pipe(
      finalize(() => { this.completed(); }),
      tap(() => {}, error => this.handleError("RequestService.logout",error)),
    );
  }
  
  public browse<T>(endpoint:string,filters:any):Observable<T> {
    this.beforeBegin();
    var qs = this.getQueryString(filters);
    return this.http.get<T>(this.url(endpoint) + '?' + qs)
    .pipe(
      finalize(() => { this.completed(); }),
      tap(() => {}, error => this.handleError("RequestService.browse",error)),
    );
  }
  
  public get<T>(endpoint:string, id:number|string):Observable<T> {
    this.beforeBegin();
    return this.http.get<T>(this.url(endpoint) + '/' + id)
    .pipe(
      finalize(() => { this.completed(); }),
      tap(() => {}, error => this.handleError("RequestService.get",error)),
    );
  }
  
  public post<T>(endpoint:string, data:any={}):Observable<T> {
    this.beforeBegin();
    return this.http.post<T>(this.url(endpoint), data)
    .pipe(
      finalize(() => { this.completed(); }),
      tap(() => {}, error => this.handleError("RequestService.post",error)),
    );
  }
  
  public put<T>(endpoint:string, id:number|string, data:any={}): Observable<T> {
    this.beforeBegin();
    return this.http.put<T>(this.url(endpoint) + '/' + id, data)
    .pipe(
      finalize(() => { this.completed(); }),
      tap(() => {}, error => this.handleError("RequestService.put",error)),
    );
  }

  public delete<T>(endpoint:string, id:number|string):Observable<T> {
    this.beforeBegin();
    var url = this.url(endpoint) + '/' + id;
    return this.http.delete<T>(url).pipe(
      finalize(() => { this.completed(); }),
      tap(() => {}, error => this.handleError("RequestService.delete",error)),
    );
  }
}
