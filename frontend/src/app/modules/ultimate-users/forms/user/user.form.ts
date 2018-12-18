import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User, FormBase, UserCreate, AssetsService } from '@marcohern/ultimate-core';
import { UserService } from '../../srvs/user.service';

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

  constructor(private fb:FormBuilder, private us:UserService, ass:AssetsService) { 
    super(ass);
  }

  ngOnInit() {
    this.acceptPassword = false;
    
    this.group = this.fb.group({
      email:this.fb.control('',[Validators.required, Validators.email],[]),
      name:this.fb.control('',[Validators.required],[]),
      password:this.fb.control('',[],[]),
      confirmPassword:this.fb.control('',[],[]),
    });

    this.group.setValue(this.user);

    if (this.user_id) {
      this.fill<User>(
        this.us.getUser(this.user_id),
        user => this.fillUser(user)
      );
    } else {
      this.group.get('password').setValidators([Validators.required]);
      this.group.get('confirmPassword').setValidators([Validators.required]);
      this.acceptPassword = true;
    }
  }

  fillUser(user) {
    console.log(this);
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
