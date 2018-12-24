import { Component, OnInit, Input } from '@angular/core';
import { User } from '@marcohern/ultimate-core';
import { UserService } from '../../srvs/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ultimate-user-table',
  templateUrl: './user.table.html',
  styleUrls: ['./user.table.css']
})
export class UserTable implements OnInit {

  @Input()
  users:User[] = [];

  constructor(private us:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onDeleting(user, index) {
    console.log("UserTable.onDeleting",user,index);
    this.us.deleteUser(user.id).subscribe(result => {
      console.log(result);
      this.users.splice(index,1);
    });
  }
}
