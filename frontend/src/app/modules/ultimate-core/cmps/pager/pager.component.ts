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

  arr(last_page:number) {
    var arr:number[] = [];
    for (let i=1; i<=last_page; i++) {
      arr[i-1] = i;
    }
    return arr;
  }

  ngOnInit() {
    this.pages = [];
  }

  isDataAvailabla() {
    if (typeof this.paged === 'undefined') return false;
    return true;
  }

  ngOnChanges() {
    if (!this.isDataAvailabla()) return;
    this.pages = this.arr(this.paged.last_page);
  }

  activate(page:number) {
    if (!this.isDataAvailabla()) '';
    return (page == this.paged.current_page) ? 'active' : '';
  }

  disable(page:number) {
    if (!this.isDataAvailabla()) return 'disabled';
    return (page < 1 || page > this.paged.last_page) ? 'disabled' : '';
  }

  disablePrev() {
    if (!this.isDataAvailabla()) return 'disabled';
    return this.disable(this.paged.current_page-1);
  }

  disableNext() {
    if (!this.isDataAvailabla()) return 'disabled';
    return this.disable(this.paged.current_page+1);
  }

  moreThanOnePage() {
    if (!this.isDataAvailabla()) return false;
    if (this.paged.last_page <= 1) return false;
    return true;
  }

  prevPage() {
    if (!this.isDataAvailabla()) return {};
    return {page: this.paged.current_page-1}
  }

  nextPage() {
    if (!this.isDataAvailabla()) return {};
    return {page: this.paged.current_page+1}
  }

}
