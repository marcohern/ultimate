import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '@marcohern/ultimate-core';
import { PagesService } from '@marcohern/ultimate-contents';

@Component({
  selector: 'page-edit-page',
  templateUrl: './page-edit.page.html',
  styleUrls: ['./page-edit.page.css']
})
export class PageEditPage implements OnInit {

  @Input()
  public page_id:number;

  constructor(
    private route:ActivatedRoute,
    private pgs:PagesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("PageEditPage.ngOnInit/this.route.params",params);
      if (params && params.page_id)
        this.page_id = params.page_id;
    });
  }

}
