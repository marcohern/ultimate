import { Component, OnInit } from '@angular/core';
import { MenuItem } from './modules/ultimate-core/models/menu-item';
import { menu, menuOptions } from './menu';
import { MenuOptions } from './modules/ultimate-core/models/menu-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ultimate';

  menu:MenuItem[] = [];
  options:MenuOptions;

  ngOnInit() {
    console.log(menu);
    this.menu = menu;
    this.options = menuOptions;
  }
}
