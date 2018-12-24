import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { User } from '@marcohern/ultimate-core';

@Component({
  selector: '[ultimate-user-row]',
  templateUrl: './user.row.html',
  styleUrls: ['./user.row.css']
})
export class UserRow implements OnInit, OnChanges {

  @Input()
  user:User;

  @Input()
  index:number;

  @Input()
  editRoute:any[] = [];

  @Output()
  editing:EventEmitter<User> = new EventEmitter();

  @Output()
  deleting:EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.user) {

    }
  }

  ngOnChanges() {
    if (this.user) {

    }
  }

  delete(user:User, index:number) {
    this.deleting.emit(user);
  }
}
