import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { companymenu } from 'src/settings/topmenu';

@Component({
  selector: 'brezza-company-sidemenu',
  templateUrl: './company-sidemenu.component.html',
  styleUrls: ['./company-sidemenu.component.css']
})
export class CompanySidemenuComponent implements OnInit {

  list:any[];

  constructor() { }

  ngOnInit() {
    var i = 0;
    var last = companymenu.length - 1;
    this.list = [];
    
    for(let item of companymenu) {
      var li = {
        item,
        ngc: (i==last) ? 'last' : (i%2) ? 'even' : 'odd',  
      };
      this.list[i] = li;
      i++;
    }
  }

}
