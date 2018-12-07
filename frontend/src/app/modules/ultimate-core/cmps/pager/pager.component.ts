import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Paged } from '../../models/paged';

@Component({
  selector: 'ultimate-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit, OnChanges {

  constructor() { }

  pages:number[] = [];

  @Input()
  paged:Paged<any> = {
    current_page:1,
    from:1,
    to:1,
    last_page:1,
    data:[],
    total:0,
    path:'',
    first_page_url:'',
    last_page_url:'',
    next_page_url:'',
    prev_page_url:''
  };

  arr(from:number, to:number) {
    var arr:number[] = [];
    for (let i=from; i<=to; i++) {
      arr[i-from] = i;
    }
    return arr;
  }

  ngOnInit() {
    this.pages = [];
  }

  ngOnChanges() {
    if (typeof this.paged === 'undefined') return;
    this.pages = this.arr(this.paged.from, this.paged.to);
  }

}
