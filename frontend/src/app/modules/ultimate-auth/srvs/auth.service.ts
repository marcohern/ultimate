import { Injectable } from '@angular/core';
import { RequestService } from '../../ultimate-core/srvs/request.service';
import { User } from '../../ultimate-core/models/user';
import { SaveResult } from '../../ultimate-core/models/save-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private req:RequestService) { }

  login(username:string, password:string) {
    return this.req.login(username, password);
  }

  logout() {
    return this.logout();
  }

  invite(user:User) {
    return this.req.post<SaveResult>('/users',user);
  }

  getUser(id:number) {
    return this.req.get<User>('/users' , id);
  }
}
