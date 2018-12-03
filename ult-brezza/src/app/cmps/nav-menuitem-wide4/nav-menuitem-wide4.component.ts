import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { ImageAd } from 'src/app/models/image-ad';

@Component({
  selector: '[brezza-nav-menuitem-wide4]',
  templateUrl: './nav-menuitem-wide4.component.html',
  styleUrls: ['./nav-menuitem-wide4.component.css']
})
export class NavMenuitemWide4Component implements OnInit {

  @HostBinding('class') uClass: string = 'mega-menu';

  @Input()
  item:MenuItem;
  
  @Input()
  ad:ImageAd;

  constructor() { }

  ngOnInit() {
  }

}
