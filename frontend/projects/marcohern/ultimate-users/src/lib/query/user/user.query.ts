import { Component, OnInit } from '@angular/core';
import { Paged, User } from '@marcohern/ultimate-core';
import { UserService } from '../../srvs/user.service';

@Component({
  selector: 'ultimate-user-query',
  templateUrl: './user.query.html',
  styleUrls: ['./user.query.css']
})
export class UserQuery implements OnInit {

  usersPaged:Paged<User>;

  constructor(private us:UserService) { }

  ngOnInit() {
    this.us.browseUsers({page:1}).subscribe(result => {
      this.usersPaged = result;
    });
  }

}
