import { Injectable } from '@angular/core';
import { RequestService } from '../../ultimate-core/srvs/request.service';
import { Paged } from '../../ultimate-core/models/paged';
import { User } from '../../ultimate-core/models/user';
import { Observable } from 'rxjs';
import { SaveResult } from '../../ultimate-core/models/save-result';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private req:RequestService) { }

  browseUsers(page:number):Observable<Paged<User>> {
    return this.req.browse<Paged<User>>('/users',{page});
  }

  getUser(id:number):Observable<User> {
    return this.req.get<User>('/users',id);
  }
  
  createUser(user:User):Observable<SaveResult> {
    return this.req.post<SaveResult>('/users',user);
  }

  updateUser(user:User):Observable<SaveResult> {
    return this.req.put<SaveResult>('/users', user.id, user);
  }

  saveUser(user:User):Observable<SaveResult> {
    if (user.id) return this.updateUser(user);
    else return this.createUser(user);
  }
}
