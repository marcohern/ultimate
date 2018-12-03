import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { ImageAd } from 'src/app/models/image-ad';

@Component({
  selector: 'brezza-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

  items4:MenuItem[] = [
    {label:'Action Figures', path:['/'], children:[
      {label:'Weebles', path:['/']},{label:'He-Man', path:['/']},{label:'Jumping Jacks', path:['/']},{label:'Gumbees', path:['/']},
    ]},
    {label:'Video Games', path:['/'], children:[
      {label:'Destiny 2', path:['/']},{label:'Dark Souls 3', path:['/']},{label:'Dead Cell', path:['/']},{label:'Fallout 76', path:['/']},
    ]},
    {label:'Movies', path:['/'], children:[
      {label:'Horror', path:['/']},{label:'Action', path:['/']},{label:'Adventure', path:['/']},{label:'Science Fiction', path:['/']},
    ]},
    {label:'Clothes', path:['/'], children:[
      {label:'Men', path:['/']},{label:'Women', path:['/']},{label:'Boy', path:['/']},{label:'Girl', path:['/']},
    ]},
  ];

  items6:MenuItem[] = [
    {label:'Action Figures', path:['/'], children:[
      {label:'Weebles', path:['/']},{label:'He-Man', path:['/']},{label:'Jumping Jacks', path:['/']},{label:'Gumbees', path:['/']},
    ]},
    {label:'Video Games', path:['/'], children:[
      {label:'Destiny 2', path:['/']},{label:'Dark Souls 3', path:['/']},{label:'Dead Cell', path:['/']},{label:'Fallout 76', path:['/']},
    ]},
    {label:'Movies', path:['/'], children:[
      {label:'Horror', path:['/']},{label:'Action', path:['/']},{label:'Adventure', path:['/']},{label:'Science Fiction', path:['/']},
    ]},
    {label:'Clothes', path:['/'], children:[
      {label:'Men', path:['/']},{label:'Women', path:['/']},{label:'Boy', path:['/']},{label:'Girl', path:['/']},
    ]},
    {label:'Titans', path:['/'], children:[
      {label:'Gaia', path:['/']},{label:'Cronus', path:['/']},{label:'Hyperion', path:['/']},{label:'Eurybia', path:['/']},
    ]},
    {label:'Horsemen', path:['/'], children:[
      {label:'King', path:['/']},{label:'War', path:['/']},{label:'Plague', path:['/']},{label:'Death', path:['/']},
    ]},
  ];

  home:MenuItem = {label:'Home', path:['/']};

  simple:MenuItem = {label:'Simple', path:['/'], children: [
    {label:'Child 1', path:['/']},
    {label:'Child 2', path:['/']},
    {label:'Child 3', path:['/']},
  ]};
  
  wide4:MenuItem = {label:'4 Subs', path:['/'], children: this.items4 };
  wide4ad:MenuItem = {label:'4 Subs & Ad', path:['/'], children: this.items4 };
  wide6:MenuItem = {label:'6 Subs', path:['/'], children: this.items6 };
  wide6ad:MenuItem = {label:'6 Subs & Ads', path:['/'], children: this.items6 };

  wideAd1:ImageAd = {src: "assets/images/menu-banner1.png", alt: "Wide Image Banner 1"  , href: "#"};
  wideAd2:ImageAd = {src: "assets/images/menu-banner2.png", alt: "Wide Image Banner 2"  , href: "#"};
  wide4Ad:ImageAd = {src: "assets/images/kid-shoes.png"   , alt: "Wide4 Menu with Image", href: "#"};
  largeAd:ImageAd = {src: "assets/images/kid-banner.png"  , alt: "Large Image Banner"   , href: "#"};

  constructor() { }

  ngOnInit() {
  }

}
