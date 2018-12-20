import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormBase } from '../../base/form-base';
import { AssetsService } from '../../srvs/assets.service';
import { Parameter } from '../../models/parameter';

@Component({
  selector: 'ultimate-param-form',
  templateUrl: './param.form.html',
  styleUrls: ['./param.form.css']
})
export class ParamForm extends FormBase implements OnInit {

  @Input()
  parameter:Parameter;
  
  constructor(ass:AssetsService, private fb:FormBuilder) { 
    super(ass);
    this.group = this.fb.group({
      name: this.fb.control(''),
      group: this.fb.control(''),
      value: this.fb.control(''),
    });
  }

  ngOnInit() {
    
  }

  public saving() {
    console.log(this.group.value);
  }

}
