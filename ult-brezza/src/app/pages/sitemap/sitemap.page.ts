import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { topmenu } from 'src/settings/topmenu';
import { ComponentBase, AssetsService } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-sitemap',
  templateUrl: './sitemap.page.html',
  styleUrls: ['./sitemap.page.css']
})
export class SitemapPage extends ComponentBase implements OnInit {

  sitemap:MenuItem[];

  constructor(ass:AssetsService) { 
    super(ass);
  }

  ngOnInit() {
    this.sitemap = topmenu;
  }

}
