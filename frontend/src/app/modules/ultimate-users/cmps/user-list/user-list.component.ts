import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/ultimate-core/models/user';

@Component({
  selector: 'ult-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[] = [
    { id:1, name:"John Doe"  , email:"jdoe@mail.com"   , scope:["*"], verified:false},
    { id:2, name:"Jane Doe"  , email:"jadoe@mail.com"  , scope:["*"], verified:false},
    { id:3, name:"Bradd Pitt", email:"bpitt@mail.com"  , scope:["*"], verified:false},
    { id:4, name:"Tom Cruise", email:"tcruise@mail.com", scope:["*"], verified:false}
  ];
  
  constructor() { }

  ngOnInit() {

  }

}
