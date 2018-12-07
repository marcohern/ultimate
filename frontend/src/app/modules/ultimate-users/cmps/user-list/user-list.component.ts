import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/ultimate-core/models/user';
import { UserService } from '../../srvs/user.service';

@Component({
  selector: 'ult-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[] = [];
  
  constructor(private us:UserService) { }

  ngOnInit() {
    this.us.browseUsers(1).subscribe(result => {
      console.log(result);
      this.users = result.data;
    });

  }

}
