import { Injectable } from '@angular/core';
import { RequestService } from '../../ultimate-core/srvs/request.service';
import { Paged } from '../../ultimate-core/models/paged';
import { User } from '../../ultimate-core/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private req:RequestService) { }

  browseUsers(page:number):Observable<Paged<User>> {
    return this.req.browse<Paged<User>>('/users',{page});
  }
}
