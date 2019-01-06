import { Component, OnInit } from '@angular/core';
import { Content } from '@marcohern/ultimate-core';
import { PagesService } from '@marcohern/ultimate-contents';

@Component({
  selector: 'ultimate-page-table',
  templateUrl: './page.table.html',
  styleUrls: ['./page.table.css']
})
export class PageTable implements OnInit {

  pages:Content[];

  constructor(private pgs:PagesService) { }

  ngOnInit() {
    this.pgs.browsePages().subscribe(result => {
      this.pages = result.data;
    });
  }

}
