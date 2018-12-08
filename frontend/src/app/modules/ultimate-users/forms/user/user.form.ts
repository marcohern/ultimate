import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/modules/ultimate-core/models/user';
import { UserService } from '../../srvs/user.service';
import { FormBase } from 'src/app/modules/ultimate-core/base/form-base';
import { UserCreate } from 'src/app/modules/ultimate-core/models/user-create';

@Component({
  selector: 'ultimate-user-form',
  templateUrl: './user.form.html',
  styleUrls: ['./user.form.css']
})
export class UserForm extends FormBase implements OnInit {

  user:UserCreate = {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  };

  acceptPassword:boolean = false;

  @Input() user_id:number;

  @Output()
  saved:EventEmitter<User> = new EventEmitter();

  constructor(private fb:FormBuilder, private us:UserService) { 
    super();
  }

  ngOnInit() {
    this.acceptPassword = false;
    
    this.group = this.fb.group({
      email:this.fb.control('',[Validators.required],[]),
      name:this.fb.control('',[Validators.required],[]),
      password:this.fb.control('',[],[]),
      confirmPassword:this.fb.control('',[],[]),
    });

    this.group.setValue(this.user);

    if (this.user_id) {
      this.fill(this.us.getUser(this.user_id));
    } else {
      this.acceptPassword = true;
    }
  }

  filling<User>(user) {
    this.user = user;
    this.group.setValue({
      email: user.email,
      name: user.name,
      password: '',
      confirmPassword: ''
    });
  }

  saving($event, values) {

    this.user.email = values.email;
    this.user.name = values.name;
    this.user.password = values.password;
    
    this.us.saveUser(this.user).subscribe(result => {
      this.saved.emit(this.user);
    });
  }

}
