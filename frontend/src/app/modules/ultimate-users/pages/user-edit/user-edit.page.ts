import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/ultimate-core/models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-edit-page',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.css']
})
export class UserEditPage implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  user_id:number;

  ngOnInit() {
    this.user_id = this.route.snapshot.params.id;
  }

  saved(user:User) {
    this.router.navigate(['/users']);
  }

  cancel() {
    this.router.navigate(['/users']);
  }

}
