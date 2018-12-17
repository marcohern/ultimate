import { Component, OnInit } from '@angular/core';
import { RequestService, MenuItem, MenuOptions } from '@marcohern/ultimate-core';
import { menu, menuOptions } from './menu';
import { environment } from 'src/environments/environment';

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

  constructor(private req:RequestService) {

  }

  ngOnInit() {
    //console.log(menu);
    this.menu = menu;
    this.options = menuOptions;
    this.req.setApiRoot(environment.api.root);
    this.req.setOauthRoot(environment.api.oauth);
    this.req.setApiId(environment.api.id);
    this.req.setApiSecret(environment.api.secret);
    this.req.retrieveToken();
  }
}
