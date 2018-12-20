import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Parameter } from '../../models/parameter';

@Component({
  selector: 'ultimate-param-row',
  templateUrl: './param.row.html',
  styleUrls: ['./param.row.css']
})
export class ParamRow implements OnInit {

  @Input()
  parameter:Parameter;
  
  @Output()
  editing:EventEmitter<Parameter> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  edit() {
    this.editing.emit(this.parameter);
  }

}
