import { Component, OnInit } from '@angular/core';
import { Product, RequestService } from '@marcohern/ultimate-core';
import { ProductsByCategory } from 'src/app/models/products-by-category';

@Component({
  selector: 'brezza-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {

  newProducts:ProductsByCategory = {
    pijamas:[], chaquetas:[], "combos-maternos":[],gorros:[],ruanas:[]
  };

  constructor(private req:RequestService) { }

  ngOnInit() {
    this.req.browse<ProductsByCategory>('/products/niu',{}).subscribe(result => {
      this.newProducts = result;
    });
  }

}
