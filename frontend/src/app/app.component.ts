import { Component, OnInit } from '@angular/core';
import { RequestService, MenuItem, MenuOptions } from '@marcohern/ultimate-core';
import { menu, menuOptions } from './menu';
import { HelloangularService } from '@marcohern/helloangular';
import { environment } from 'src/environments/environment.prod';

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
    this.req.setApiRoot(environment.api.root);
    this.req.setApiId(environment.api.id);
    this.req.setApiSecret(environment.api.secret);
    this.req.retrieveToken();
    this.test = this.ts.getHello();
  }
}
