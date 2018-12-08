import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/modules/ultimate-core/models/product';
import { getDefaultSettings } from 'http2';

@Component({
  selector: '[product-row]',
  templateUrl: './product.row.html',
  styleUrls: ['./product.row.css']
})
export class ProductRow implements OnInit {

  @Input()
  product:Product = {
    id:0,
    name:'',
    slug:'',
  };

  @Output()
  deleting:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  delete($event) {
    console.log("delete",this.product);
  }

  edit($event) {
    console.log("delete",this.product);
  }

}
