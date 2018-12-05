import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { topmenu } from 'src/settings/topmenu';

@Component({
  selector: 'brezza-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  mobilemenu:MenuItem[];

  constructor() { }

  ngOnInit() {
    this.mobilemenu = topmenu;
  }

}
