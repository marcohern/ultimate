import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/ultimate-core/models/user';
import { UserService } from '../../srvs/user.service';
import { Paged } from 'src/app/modules/ultimate-core/models/paged';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ult-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[] = [
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
    {id:0,email:'-------- --------',name:'-------- --------'},
  ];

  usersPaged:Paged<User>;
  page:number;
  
  constructor(private us:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.users = [];
      this.page = (params['page']) ? params["page"] : 1;
      this.us.browseUsers(this.page).subscribe(result => {
        console.log(result);
        this.users = result.data;
        this.usersPaged = result;
      });
    });
  }

  delete(user:User,index:number) {
    console.log("delete",user,index);
    this.us.deleteUser(user.id).subscribe(result => {
      console.log(result);
      this.users.splice(index,1);
    });
  }

}
