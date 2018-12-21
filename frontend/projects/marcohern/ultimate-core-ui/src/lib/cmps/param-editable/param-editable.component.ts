import { Component, OnInit, Input } from '@angular/core';
import { Parameter, ParameterService } from '@marcohern/ultimate-core';

@Component({
  selector: 'ultimate-param-editable',
  templateUrl: './param-editable.component.html',
  styleUrls: ['./param-editable.component.css']
})
export class ParamEditableComponent implements OnInit {

  isEditing:boolean = false;

  @Input()
  parameter:Parameter;

  constructor(private ps:ParameterService) { }

  ngOnInit() {
    
  }

  editing($event) {
    this.isEditing = true;
      
    console.log("ParamEditableComponent.editing",this.parameter);
  }

  save($event) {
    console.log("ParamEditableComponent.save",this.parameter);
    this.ps.saveParameter(this.parameter).subscribe(result => {
      console.log("ParamEditableComponent.save","ps.saveParameter",this.parameter, result);
      this.isEditing = false;
    });
  }

}
