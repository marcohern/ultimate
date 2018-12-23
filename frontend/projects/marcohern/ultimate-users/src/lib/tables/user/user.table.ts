import { Component, OnInit, Input } from '@angular/core';
import { User } from '@marcohern/ultimate-core';

@Component({
  selector: 'ultimate-user-table',
  templateUrl: './user.table.html',
  styleUrls: ['./user.table.css']
})
export class UserTable implements OnInit {

  @Input()
  users:User[] = [];

  constructor() { }

  ngOnInit() {
  }

}
