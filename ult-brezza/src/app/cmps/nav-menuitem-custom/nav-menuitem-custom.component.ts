import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: '[brezza-nav-menuitem-custom]',
  templateUrl: './nav-menuitem-custom.component.html',
  styleUrls: ['./nav-menuitem-custom.component.css']
})
export class NavMenuitemCustomComponent implements OnInit {

  @HostBinding('class') uClass: string = 'nav-custom-link mega-menu';

  constructor() { }

  ngOnInit() {
  }

}
