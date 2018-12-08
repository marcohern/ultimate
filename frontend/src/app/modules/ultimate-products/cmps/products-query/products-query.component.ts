import { Component, OnInit } from '@angular/core';
import { Paged } from 'src/app/modules/ultimate-core/models/paged';
import { Product } from 'src/app/modules/ultimate-core/models/product';
import { ProductService } from '../../srvs/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ultimate-products-query',
  templateUrl: './products-query.component.html',
  styleUrls: ['./products-query.component.css']
})
export class ProductsQueryComponent implements OnInit {

  paged:Paged<Product> = new Paged<Product>();

  constructor(private ps:ProductService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      var page = 1;
      if (params['page']) page=params['page'];
      this.ps.browseProducts(page).subscribe(result => {
        console.log(result);
        this.paged = result;
      });
    });    
  }

}
