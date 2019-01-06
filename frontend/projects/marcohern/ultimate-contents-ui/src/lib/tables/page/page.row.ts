import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@marcohern/ultimate-core';

@Component({
  selector: '[ultimate-page-row]',
  templateUrl: './page.row.html',
  styleUrls: ['./page.row.css']
})
export class PageRow implements OnInit {

  @Input()
  page:Content;

  constructor() { }

  ngOnInit() {
  }

}
