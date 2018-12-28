import { Component, OnInit } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';
import { ProductsByCategory } from 'src/app/models/products-by-category';
import { ProductService } from '@marcohern/ultimate-products';

@Component({
  selector: 'brezza-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {

  newProducts:ProductsByCategory = {
    pijamas:[], chaquetas:[], "combos-maternos":[],gorros:[],ruanas:[]
  };

  constructor(private prs:ProductService) { }

  ngOnInit() {

    this.prs.getFfeaturedProductsPerCategory().subscribe(result => {
      this.newProducts = result;
    });
  }

}
