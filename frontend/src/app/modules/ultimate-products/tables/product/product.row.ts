import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/modules/ultimate-core/models/product';
import { getDefaultSettings } from 'http2';
import { ProductService } from '../../srvs/product.service';
import { SaveResult } from 'src/app/modules/ultimate-core/models/save-result';

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
    product.delete = false;
    this.deleting.emit(product);
  }

}
