import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { ImageAd } from 'src/app/models/image-ad';
import { topmenu } from 'src/settings/topmenu';

@Component({
  selector: 'brezza-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {
  
  topmenu:MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.topmenu = topmenu;
  }

}
