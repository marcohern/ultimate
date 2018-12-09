import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modules/ultimate-core/models/product';

@Component({
  selector: 'product-table',
  templateUrl: './product.table.html',
  styleUrls: ['./product.table.css']
})
export class ProductTable implements OnInit {

  @Input()
  products:Product[] = [];

  constructor() { }

  ngOnInit() {
    
  }

  deleting(product:Product) {
    console.log("ProductTable.deliting",product);
    product.delete = true;
  }

  deleted(product:Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

}
