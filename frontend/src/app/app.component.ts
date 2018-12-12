import { Component, OnInit } from '@angular/core';
import { MenuItem } from './modules/ultimate-core/models/menu-item';
import { menu, menuOptions } from './menu';
import { MenuOptions } from './modules/ultimate-core/models/menu-options';
import { RequestService } from './modules/ultimate-core/srvs/request.service';
import { HelloangularService } from '@marcohern/helloangular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ultimate';
  test = '[TEST]';

  menu:MenuItem[] = [];
  options:MenuOptions;

  constructor(private req:RequestService, private ts:HelloangularService) {

  }

  ngOnInit() {
    //console.log(menu);
    this.menu = menu;
    this.options = menuOptions;
    this.req.retrieveToken();
    this.test = this.ts.getHello();
  }
}
