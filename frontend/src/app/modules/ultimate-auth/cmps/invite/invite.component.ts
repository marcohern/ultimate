import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../srvs/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modules/ultimate-core/models/user';

@Component({
  selector: 'ult-auth-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  constructor(private as:AuthService, private route:ActivatedRoute) { }

  user:User = {email:'',name:''};

  ngOnInit() {
    var user_id = this.route.snapshot.params.id;
    this.as.getUser(user_id).subscribe(result => {
      console.log(result);
      this.user = result;
    });
    /*
    this.as.invite({email:'jcusack@mail.com',name:'John Cusack'}).subscribe(result => {
      console.log(result);
    });*/
  }

  invite($event) {
    //console.log("invite",$event, this.user);
    var user = {
      id: this.user.id,
      email: this.user.email,
      name: this.user.name
    };
    this.as.invite(user).subscribe(result => {
      console.log(result);
    });
  }

}
