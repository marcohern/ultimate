import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: '[brezza-nav-menuitem-simple]',
  templateUrl: './nav-menuitem-simple.component.html',
  styleUrls: ['./nav-menuitem-simple.component.css']
})
export class NavMenuitemSimpleComponent implements OnInit {


  @HostBinding('id') @Input()
  id: string;

  @HostBinding('class') uClass: string = 'level0 parent drop-menu';

  @Input()
  item:MenuItem;
  
  constructor() { }

  ngOnInit() {

  }

}
