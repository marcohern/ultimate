import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brezza-product-item-info',
  templateUrl: './product-item-info.component.html',
  styleUrls: ['./product-item-info.component.css']
})
export class ProductItemInfoComponent implements OnInit {

  rating:number;

  constructor() { }

  ngOnInit() {
    this.rating = Math.round(Math.random()*20)*5;
    console.log(this.rating);
  }

}
