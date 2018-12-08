import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/ultimate-core/models/product';

@Component({
  selector: '[product-row]',
  templateUrl: './product.row.html',
  styleUrls: ['./product.row.css']
})
export class ProductRow implements OnInit {

  product:Product = {
    id:0,
    name:'',
    slug:'',
  };

  constructor() { }

  ngOnInit() {
  }

}
