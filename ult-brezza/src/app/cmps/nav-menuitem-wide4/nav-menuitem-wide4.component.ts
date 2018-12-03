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

  item:MenuItem = {
    label:'Wide4', path:['/'], children: [
      {label:'Action Figures', path:['/'], children:[
        {label:'Weebles', path:['/']},
        {label:'He-Man', path:['/']},
        {label:'Jumping Jacks', path:['/']},
        {label:'Gumbees', path:['/']},
      ]},
      {label:'Video Games', path:['/'], children:[
        {label:'Destiny 2', path:['/']},
        {label:'Dark Souls 3', path:['/']},
        {label:'Dead Cell', path:['/']},
        {label:'Fallout 76', path:['/']},
      ]},
      {label:'Movies', path:['/'], children:[
        {label:'Horror', path:['/']},
        {label:'Action', path:['/']},
        {label:'Adventure', path:['/']},
        {label:'Science Fiction', path:['/']},
      ]},
      {label:'Clothes', path:['/'], children:[
        {label:'Men', path:['/']},
        {label:'Women', path:['/']},
        {label:'Boy', path:['/']},
        {label:'Girl', path:['/']},
      ]},
    ]
  };
  
  @Input()
  ad:ImageAd = {
    src: "assets/images/kid-shoes.png",
    alt: "Wide4 Menu with Image",
    href: "#"
  };

  constructor() { }

  ngOnInit() {
  }

}
