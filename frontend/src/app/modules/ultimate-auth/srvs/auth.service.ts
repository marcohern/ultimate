import { Injectable } from '@angular/core';
import { User, SaveResult, RequestService } from '@marcohern/ultimate-core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private req:RequestService) { }

  login(username:string, password:string) {
    return this.req.login(username, password);
  }

  logout() {
    return this.req.logout();
  }

  invite(user:User) {
    return this.req.post<SaveResult>('/users',user);
  }

  getUser(id:number) {
    return this.req.get<User>('/users' , id);
  }
}
