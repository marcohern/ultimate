import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../ultimate-core/srvs/request.service';
import { Router } from '@angular/router';

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
  errorAlert:boolean;
  errorMsg:string = '';

  constructor(private _req:RequestService,private router:Router) { }

  public req() {
    get: {
      return this._req;
    }
  }

  ngOnInit() {
    
  }

  requestLogin() {
    this.errorAlert = false;
    this.errorMsg = '';
    console.log("requestLogin");

    this._req.login(this.email,this.password).subscribe(result => {
      this._req.setToken(result.access_token);
      this.router.navigate(['/private']);
    }, error=> {
      if (error.error) {
        if(error.error.message) {
          this.errorMsg = error.error.message;  
        }
      } else {
        if (error.message) {
          this.errorMsg = error.message;
        }
      }
      this.errorAlert = true;
    });
  }
}
