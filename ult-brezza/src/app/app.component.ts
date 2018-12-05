import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ult-brezza';

  constructor(private router:Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
			jQuery('.zoomContainer').remove();   
  });
  }
}
