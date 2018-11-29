import { Component, OnInit } from '@angular/core';
import { MenuItem } from './modules/ultimate-core/models/menu-item';
import { menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ultimate';
  menu:MenuItem[] = [];

  ngOnInit() {
    console.log(menu);
    this.menu = menu;
  }
}
