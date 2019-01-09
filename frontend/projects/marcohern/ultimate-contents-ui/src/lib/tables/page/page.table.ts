import { Component, OnInit, OnChanges } from '@angular/core';
import { Content } from '@marcohern/ultimate-core';
import { PagesService } from '@marcohern/ultimate-contents';

@Component({
  selector: 'ultimate-page-table',
  templateUrl: './page.table.html',
  styleUrls: ['./page.table.css']
})
export class PageTable implements OnInit, OnChanges {

  pages:Content[];

  constructor(private pgs:PagesService) { }

  ngOnInit() {
    this.pgs.browsePages({type:'page'}).subscribe(result => {
      this.pages = result.data;
    });
  }

  ngOnChanges() {
    console.log("PageTable.ngOnChanges", this.pages);
  }

}
