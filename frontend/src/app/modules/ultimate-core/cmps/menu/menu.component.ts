import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'ultimate-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  constructor() { }

  @Input()
  public title = '[Title]';

  @Input()
  public items:MenuItem[] = [];

  public menu:any[] = [];

  ngOnInit() {
    var j=1;
    for(let i of this.items) {

      var m = {
        id: j,
        label: i.label,
        divider: false,
        enabled: false,
        dropdown: false,
        children: i.children,
        path: i.path,
        disableClass: ''
      };
      m.enabled = (typeof i.enabled === 'undefined') ? true : (i.enabled === true) ? true : false;
      m.divider = (i.label == '-') ? true : false;
      m.dropdown = (i.children && i.children.length > 0) ? true : false;
      m.disableClass = (m.enabled) ? '' : 'disabled';
      console.log(i,m.disableClass);

      this.menu.push(m);
      j++;
    }
  }

}
