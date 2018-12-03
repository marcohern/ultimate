import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: '[brezza-company-sidemenu-link]',
  templateUrl: './company-sidemenu-link.component.html',
  styleUrls: ['./company-sidemenu-link.component.css']
})
export class CompanySidemenuLinkComponent implements OnInit {

  @HostBinding('class') uClass:string = 'item';

  @Input()
  current:boolean = false;

  @Input()
  item:MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
