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

  item:MenuItem = {
    label:'Wide', path:['/'], children: [
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
      {label:'Titans', path:['/'], children:[
        {label:'Gaia', path:['/']},
        {label:'Cronus', path:['/']},
        {label:'Hyperion', path:['/']},
        {label:'Eurybia', path:['/']},
      ]},
      {label:'Horsemen', path:['/'], children:[
        {label:'King', path:['/']},
        {label:'War', path:['/']},
        {label:'Plague', path:['/']},
        {label:'Death', path:['/']},
      ]},
    ]
  };

  @Input()
  leftAd:ImageAd = {src: "assets/images/menu-banner1.png",alt: "Menu Banner 1",href: "#"};

  @Input()
  rightAd:ImageAd = {src: "assets/images/menu-banner2.png",alt: "Menu Banner 2",href: "#"};

  constructor() { }

  ngOnInit() {
  }

}
