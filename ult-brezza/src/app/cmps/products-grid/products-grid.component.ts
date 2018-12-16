import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Paged, RequestService, Category } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  constructor(private req:RequestService, private route:ActivatedRoute) { }

  productsPaged:Paged<Product>;

  category:Category;

  ngOnInit() {
    this.route.params.subscribe(params => {
      var category_slug = params.slug;
      this.req.get<Category>('/categories', category_slug).subscribe(result => {
        this.category = result;
      });
      this.req.browse<Paged<Product>>('/products',{category_slug}).subscribe(result => {
        console.log(category_slug, result);
        this.productsPaged = result;
      });
    })
  }
}
