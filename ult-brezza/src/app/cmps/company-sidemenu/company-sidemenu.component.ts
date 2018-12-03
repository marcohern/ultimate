import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'brezza-company-sidemenu',
  templateUrl: './company-sidemenu.component.html',
  styleUrls: ['./company-sidemenu.component.css']
})
export class CompanySidemenuComponent implements OnInit {

  about  :MenuItem = {label:'About Us'        , path:['/about']};
  sitemap:MenuItem = {label:'Site Map'        , path:['/sitemap']};
  terms  :MenuItem = {label:'Terms of Service', path:['/terms']};
  contact:MenuItem = {label:'Contact Us'      , path:['/contact']};
  faq    :MenuItem = {label:'FAQ'             , path:['/faq']};

  list:any[] = [
    {item:this.about  , ngc:'even'},
    {item:this.sitemap, ngc:'odd' },
    {item:this.terms  , ngc:'even'},
    {item:this.faq    , ngc:'odd' },
    {item:this.contact, ngc:'last'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
