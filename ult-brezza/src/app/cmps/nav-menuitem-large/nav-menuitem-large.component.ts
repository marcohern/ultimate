import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { ImageAd } from 'src/app/models/image-ad';

@Component({
  selector: '[brezza-nav-menuitem-large]',
  templateUrl: './nav-menuitem-large.component.html',
  styleUrls: ['./nav-menuitem-large.component.css']
})
export class NavMenuitemLargeComponent implements OnInit {
  
  @HostBinding('class') uClass: string = 'mega-menu';

  @Input()
  item:MenuItem;
  
  @Input()
  ad:ImageAd;

  constructor() { }

  ngOnInit() {
  }

}
