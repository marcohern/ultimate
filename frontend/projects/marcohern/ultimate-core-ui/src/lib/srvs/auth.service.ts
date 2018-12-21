import { Injectable } from '@angular/core';
import { User, SaveResult, RequestService, LoginResult } from '@marcohern/ultimate-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private req:RequestService) { }

  login(username:string, password:string) : Observable<LoginResult> {
    return this.req.login(username, password);
  }

  logout() : Observable<any> {
    return this.req.logout();
  }

  invite(user:User) : Observable<SaveResult> {
    return this.req.post<SaveResult>('/users',user);
  }

  getUser(id:number) : Observable<User> {
    return this.req.get<User>('/users' , id);
  }
}
