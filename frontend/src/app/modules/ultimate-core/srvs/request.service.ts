import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  private static tokenId:string = 'com.marcohern.ultimate.auth.token';

  private token:string = null;

  constructor(private http:HttpClient) { }

  private url(endpoint:string):string {
    return environment.api.root + endpoint;
  }

  private headers() {
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    headers.set('Accept','application/json');
    if (this.token != null) {
      headers.set('Authorization','Bearer ' + this.token);
    }
    return headers;
  }

  public setToken(token:string) {
    window.sessionStorage.setItem(RequestService.tokenId, this.token);
    this.token = token;
  }

  public clearToken() {
    window.sessionStorage.removeItem(RequestService.tokenId);
    this.token = null;
  }

  public retrieveToken() {
    var t = window.sessionStorage.getItem(RequestService.tokenId);
    if (t) {
      this.token = t;
    }
  }

  public saveToken() {
    window.sessionStorage.setItem(RequestService.tokenId, this.token);
  }

  public deleteToken() {
    window.sessionStorage.removeItem(RequestService.tokenId);
  }

  private getQueryString(object:any) {
    var qs:string = '';
    var i = 0;
    for (let key in object) {
      if (i>0) qs += '&';
      qs += key + '=' + encodeURI(object[key]);
      i++;
    }
    return qs;
  }

  public browse<T>(endpoint:string,filters:any):Observable<T> {
    var qs = this.getQueryString(filters);
    return this.http.get<T>(this.url(endpoint) + '?' + qs, { 
      headers: this.headers()
    }).pipe(
      catchError(this.handleError<T>('RequestService.browse'))
    );
  }

  public get<T>(endpoint:string, id:number|string):Observable<T> {
    return this.http.get<T>(this.url(endpoint) + '/' + id, { 
      headers: this.headers()
    }).pipe(
      catchError(this.handleError<T>('RequestService.get'))
    );
  }

  public post<T>(endpoint:string, data:any={}):Observable<T> {
    return this.http.post<T>(this.url(endpoint), data, {
      headers: this.headers()
    }).pipe(
      catchError(this.handleError<T>('RequestService.post'))
    );
  }

  public put<T>(endpoint:string, id:number|string, data:any={}): Observable<T> {
    return this.http.post<T>(this.url(endpoint) + '/' + id, data, {
      headers: this.headers()
    }).pipe(
      catchError(this.handleError<T>('RequestService.put'))
    );
  }

  public delete<T>(endpoint:string, id:number|string):Observable<T> {
    var url = this.url(endpoint) + '?' + id;
    return this.http.get<T>(url, { 
      headers: this.headers()
    }).pipe(
      catchError(this.handleError<T>('RequestService.delete'))
    );
  }

  private handleError<T>(operation:string = 'operation', result?: T) {
    return (err:HttpErrorResponse): Observable<T> => {
      console.error(err);
      if (err.status == 401) {
        console.warn("Unauthenticated... maybe redirect here?");
      }
      return of(result as T);
    }
  }
}
