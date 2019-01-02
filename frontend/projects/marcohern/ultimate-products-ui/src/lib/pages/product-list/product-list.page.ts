import { Component, OnInit } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';

@Component({
  selector: 'product-list-page',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.css']
})
export class ProductListPage implements OnInit {

  products:Product[] = [
    {
      id:1,
      name:'QuietComfort 35 wireless headphones II',
      slug:'quietcomfort-35-wireless-headphones-ii',
      org_price:349.95,dct_price:299.95
    },
    {
      id:2,
      name:'Custom QuietComfort 35 wireless headphones II',
      slug:'custom-quietcomfort-35-wireless-headphones-ii',
      org_price:399.95,
    },
    {
      id:3,
      name:'QC25 noise cancelling headphones Apple devices',
      slug:'qc25-noise-cancelling-headphones-apple-devices',
      org_price:179.95,
    },
    {
      id:4,
      name:'QuietControl 30 wireless headphones',
      slug:'quietcontrol-30-wireless-headphones',
      org_price:299.95,
    },
    {
      id:1,
      name:'QuietComfort 35 wireless headphones II',
      slug:'quietcomfort-35-wireless-headphones-ii',
      org_price:349.95,dct_price:299.95
    },
    {
      id:2,
      name:'Custom QuietComfort 35 wireless headphones II',
      slug:'custom-quietcomfort-35-wireless-headphones-ii',
      org_price:399.95,
    },
    {
      id:3,
      name:'QC25 noise cancelling headphones Apple devices',
      slug:'qc25-noise-cancelling-headphones-apple-devices',
      org_price:179.95,
    },
    {
      id:4,
      name:'QuietControl 30 wireless headphones',
      slug:'quietcontrol-30-wireless-headphones',
      org_price:299.95,
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
