import { Component, OnInit, Input } from '@angular/core';
import { Parameter } from '../../models/parameter';

@Component({
  selector: 'ultimate-param-editable',
  templateUrl: './param-editable.component.html',
  styleUrls: ['./param-editable.component.css']
})
export class ParamEditableComponent implements OnInit {

  isEditing:boolean = false;

  @Input()
  parameter:Parameter;

  constructor() { }

  ngOnInit() {
  }

}
