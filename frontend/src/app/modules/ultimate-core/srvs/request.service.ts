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
    this.updateRequesting(true);
    return this.http.post<LoginResult>(this.oauth('/token'), 
    {
      grant_type:"password",
      client_id: environment.api.id,
      client_secret:environment.api.secret,
      username:username,
      password:password
    })
    .pipe(
      finalize(() => { 
        this.completed(); 
      }),
      catchError(this.handleError<LoginResult>('RequestService.browse'))
    );
  }
  
  public browse<T>(endpoint:string,filters:any):Observable<T> {
      this.updateRequesting(true);
      var qs = this.getQueryString(filters);
      return this.http.get<T>(this.url(endpoint) + '?' + qs, { 
        headers: this.headers()
      }).pipe(
        finalize(() => { 
          this.completed(); 
        }),
        catchError(this.handleError<T>('RequestService.browse'))
      );
    }
  
    public get<T>(endpoint:string, id:number|string):Observable<T> {
      this.updateRequesting(true);
      return this.http.get<T>(this.url(endpoint) + '/' + id, { 
        headers: this.headers()
      }).pipe(
        finalize(() => { 
          this.completed(); 
        }),
        catchError(this.handleError<T>('RequestService.get'))
      );
    }
  
    public post<T>(endpoint:string, data:any={}):Observable<T> {
      this.updateRequesting(true);
      console.log("post", this);
      return this.http.post<T>(this.url(endpoint), data, {
        headers: this.headers()
      }).pipe(
        finalize(() => { 
          this.completed(); 
        }),
        catchError(this.handleError<T>('RequestService.post'))
      );
    }
  
    public put<T>(endpoint:string, id:number|string, data:any={}): Observable<T> {
      this.updateRequesting(true);
      return this.http.post<T>(this.url(endpoint) + '/' + id, data, {
        headers: this.headers()
      }).pipe(
        finalize(() => { 
          this.completed(); 
        }),
        catchError(this.handleError<T>('RequestService.put'))
      );
    }
  
    public delete<T>(endpoint:string, id:number|string):Observable<T> {
      this.updateRequesting(true);
      var url = this.url(endpoint) + '?' + id;
      return this.http.get<T>(url, { 
        headers: this.headers()
      }).pipe(
        finalize(() => { 
          this.completed(); 
        }),
        catchError(this.handleError<T>('RequestService.delete'))
      );
    }
}
