import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/modules/ultimate-core/models/user';
import { UserService } from '../../srvs/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ultimate-user-form',
  templateUrl: './user.form.html',
  styleUrls: ['./user.form.css']
})
export class UserForm implements OnInit {

  userFormGroup:FormGroup;
  user:User = {
    email: '',
    name: ''
  };

  @Input() user_id:number;

  @Output()
  saved:EventEmitter<User> = new EventEmitter();
  
  @Output()
  canceled:EventEmitter<any> = new EventEmitter();

  constructor(private fb:FormBuilder, private us:UserService) { }

  ngOnInit() {
    console.log("user_id", this.user_id);
    this.userFormGroup = this.fb.group({
      email:this.fb.control('',[Validators.required],[]),
      name:this.fb.control('',[Validators.required],[]),
    });

    this.userFormGroup.setValue(this.user);

    if (this.user_id) {
      this.us.getUser(this.user_id).subscribe(user => {
        this.user = user;
        this.userFormGroup.setValue({
          email: user.email,
          name: user.name
        });
      });
    }
  }

  submit($event) {
    var values = this.userFormGroup.value;
    console.log(this.userFormGroup.value, this.userFormGroup.valid);

    if (this.userFormGroup.valid) {
      this.user.email = values.email;
      this.user.name = values.name;
      this.us.saveUser(this.user).subscribe(result => {
        this.saved.emit(this.user);
      });
    }
  }

  cancel() {
    this.canceled.emit();
  }

}
