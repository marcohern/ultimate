import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-edit-page',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.css']
})
export class UserEditPage implements OnInit {

  user_id:number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user_id = this.route.snapshot.params.id;
  }
}
