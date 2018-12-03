import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { ImageAd } from 'src/app/models/image-ad';

@Component({
  selector: '[brezza-nav-menuitem-wide]',
  templateUrl: './nav-menuitem-wide.component.html',
  styleUrls: ['./nav-menuitem-wide.component.css']
})
export class NavMenuitemWideComponent implements OnInit {

  @HostBinding('class') uClass: string = 'mega-menu';

  @Input()
  item:MenuItem;

  @Input()
  leftAd:ImageAd;

  @Input()
  rightAd:ImageAd;

  constructor() { }

  ngOnInit() {
  }

}
