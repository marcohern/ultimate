import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { topmenu } from 'src/settings/topmenu';

@Component({
  selector: 'brezza-sitemap',
  templateUrl: './sitemap.page.html',
  styleUrls: ['./sitemap.page.css']
})
export class SitemapPage implements OnInit {

  sitemap:MenuItem[];

  constructor() { }

  ngOnInit() {
    this.sitemap = topmenu;
  }

}
