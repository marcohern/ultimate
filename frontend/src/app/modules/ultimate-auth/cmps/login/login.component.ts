import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../ultimate-core/srvs/request.service';
import { User } from '../../../ultimate-core/models/user';
import { LoginResult } from '../../../ultimate-core/models/login-result';

@Component({
  selector: 'ult-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private req:RequestService) { }

  ngOnInit() {
    
  }

  requestLogin() {
    console.log("requestLogin");

    this.req.login(this.email,this.password).subscribe(result => {
      console.log(result, result.access_token);
      this.req.setToken(result.access_token);
    });
  }
}
