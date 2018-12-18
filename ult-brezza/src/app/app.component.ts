import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RequestService, AssetsService } from '@marcohern/ultimate-core';

import { environment } from 'src/environments/environment';

declare var jQuery;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ult-brezza';

  constructor(private router:Router, private req:RequestService, private ass:AssetsService) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
      jQuery('.zoomContainer').remove();
    });

    this.ass.setAssetsDir(environment.assets);
    this.req.setApiRoot(environment.api.root);
    this.req.setOauthRoot(environment.api.oauth);
    this.req.setApiId(environment.api.id);
    this.req.setApiSecret(environment.api.secret);
    this.req.retrieveToken();
  }
}
