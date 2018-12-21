import { Component, OnInit } from '@angular/core';
import { Parameter, ParameterService } from '@marcohern/ultimate-core';

@Component({
  selector: 'ultimate-param-table',
  templateUrl: './param.table.html',
  styleUrls: ['./param.table.css']
})
export class ParamTable implements OnInit {

  parameters:Parameter[] = [];

  constructor(private ps:ParameterService) { }

  ngOnInit() {
    this.ps.getAllParameters().subscribe(result => {
      this.parameters = result;
    });
  }

}
