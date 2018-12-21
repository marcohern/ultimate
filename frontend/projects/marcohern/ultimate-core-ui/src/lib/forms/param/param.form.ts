import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormBase, Parameter, AssetsService } from '@marcohern/ultimate-core';

@Component({
  selector: 'ultimate-param-form',
  templateUrl: './param.form.html',
  styleUrls: ['./param.form.css']
})
export class ParamForm extends FormBase implements OnInit, OnChanges {

  @Input()
  parameter:Parameter;

  @Output()
  save:EventEmitter<Parameter> = new EventEmitter;
  
  constructor(ass:AssetsService, private fb:FormBuilder) { 
    super(ass);
    this.group = this.fb.group({
      name: this.fb.control(''),
      group: this.fb.control(''),
      value: this.fb.control(''),
    });
  }

  ngOnInit() {
    /*console.log("ParamForm.ngOnInit", this.parameter);
    if (this.parameter) {
      this.group.setValue({
        name: this.parameter.name,
        group: this.parameter.group,
        value: this.parameter.value,
      });
    }*/
  }

  ngOnChanges() {
    if (this.parameter) {
      this.group.setValue({
        name: this.parameter.name,
        group: this.parameter.group,
        value: this.parameter.value,
      });
    }
  }

  public saving() {
    this.parameter.value = this.group.value.value;
    this.save.emit(this.parameter);
  }

}
