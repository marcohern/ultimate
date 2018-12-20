import { Component, OnInit } from '@angular/core';
import { Parameter } from '../../models/parameter';

@Component({
  selector: 'ultimate-param-table',
  templateUrl: './param.table.html',
  styleUrls: ['./param.table.css']
})
export class ParamTable implements OnInit {

  parameters:Parameter[] = [
    {name:'name1',group:'group',value:'value1'},
    {name:'name2',group:'group',value:'value2'},
    {name:'name3',group:'group',value:'value3'},
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
