import { Injectable } from '@angular/core';
import { RequestService, Paged, User, SaveResult } from '@marcohern/ultimate-core';
import { Observable } from 'rxjs';

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

  deleteUser(id:number):Observable<SaveResult> {
    return this.req.delete<SaveResult>('/users', id);
  }
}
