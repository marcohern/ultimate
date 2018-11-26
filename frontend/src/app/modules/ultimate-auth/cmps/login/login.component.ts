import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../ultimate-core/srvs/request.service';
import { User } from '../../../ultimate-core/models/user';

@Component({
  selector: 'ult-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private req:RequestService) { }

  ngOnInit() {
  }

  requestLogin() {
    console.log("requestLogin");

    this.req.post<User>('/users',{}).subscribe(result => {
      console.log(result);
    });
  }
}
