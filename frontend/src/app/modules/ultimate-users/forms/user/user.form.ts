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
    console.log("user_id", this.user_id);
    this.group = this.fb.group({
      email:this.fb.control('',[Validators.required],[]),
      name:this.fb.control('',[Validators.required],[]),
      password:this.fb.control('',[Validators.required],[]),
      confirmPassword:this.fb.control('',[Validators.required],[]),
    });

    this.group.setValue(this.user);

    if (this.user_id) {
      this.loading = true;
      console.log("loading",this.loading);
      this.us.getUser(this.user_id).subscribe(user => {
        
        this.group.setValue({
          email: user.email,
          name: user.name,
          password: '',
          confirmPassword: ''
        });
        this.loading = false;
        console.log("loading",this.loading);
      }, error => {
        this.handleLoadError(error);
      });
    } else {
      this.acceptPassword = true;
    }
  }

  saving($event, values) {
    console.log("UserForm.saving",this,$event);

    this.user.email = values.email;
    this.user.name = values.name;
    this.user.password = values.password;
    
    this.us.saveUser(this.user).subscribe(result => {
      this.saved.emit(this.user);
    });
  }

}
