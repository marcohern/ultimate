import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { topmenu } from 'src/settings/topmenu';
import { AssetsBase } from 'src/app/base/assets-base';

@Component({
  selector: 'brezza-sitemap',
  templateUrl: './sitemap.page.html',
  styleUrls: ['./sitemap.page.css']
})
export class SitemapPage extends AssetsBase implements OnInit {

  sitemap:MenuItem[];

  constructor() { 
    super();
  }

  ngOnInit() {
    this.sitemap = topmenu;
  }

}
