import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, SaveResult } from '@marcohern/ultimate-core';
import { ProductService } from '@marcohern/ultimate-products';

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
    slug:''
  };

  @Output()
  deleting:EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  deleted:EventEmitter<SaveResult> = new EventEmitter<SaveResult>();

  constructor(private ps:ProductService) { }

  ngOnInit() {
    
    this.deleting.subscribe(product => {
      if (product.delete) {
        this.ps.deleteProduct(product.id).subscribe(result => {
          this.deleted.emit(product);
        });
      }
    });
  }

  delete($event, product) {
    product.delete = true;
    this.deleting.emit(product);
  }

}
