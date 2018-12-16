import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RequestService } from '@marcohern/ultimate-core';

declare var jQuery;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ult-brezza';

  constructor(private router:Router, private req:RequestService) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
      jQuery('.zoomContainer').remove();   
      
      this.req.setApiRoot(environment.api.root);
      this.req.setOauthRoot(environment.api.oauth);
      this.req.setApiId(environment.api.id);
      this.req.setApiSecret(environment.api.secret);
      this.req.retrieveToken();
  });
  }
}
