import { Injectable } from '@angular/core';
import { RequestService, Category, Paged, Product, SaveResult } from '@marcohern/ultimate-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private req:RequestService) { }

  browseProducts(params:any) : Observable<Paged<Product>> {
    return this.req.browse<Paged<Product>>('/products', params);
  }

  getProduct(id:number) : Observable<Product> {
    return this.req.get<Product>('/products', id);
  }

  updateProduct(id:number, product:Product) : Observable<SaveResult> {
    return this.req.put<SaveResult>('/products', id, product);
  }

  createProduct(product:Product) : Observable<SaveResult> {
    return this.req.post<SaveResult>('/products', product);
  }

  saveProduct(product:Product) : Observable<SaveResult> {
    return (product.id) ?
      this.updateProduct(product.id, product) :
      this.createProduct(product);
  }

  deleteProduct(id:number) : Observable<SaveResult> {
    return this.req.delete<SaveResult>('/products', id);
  }

  hitProduct(id:number) : Observable<SaveResult> {
    return this.req.post<SaveResult>('/product/hit', id);
  }

  clickProduct(id:number) : Observable<SaveResult> {
    return this.req.post<SaveResult>('/product/click', id);
  }

  categories() : Observable<Category[]> {
    return this.req.browse<Category[]>('/product/categories', {});
  }

  getHotProducts() : Observable<Product> {
    return this.req.browse<Product>('/product/hot', {});
  }

  getFfeaturedProductsPerCategory() : Observable<any> {
    return this.req.browse<any>('/products/niu', {});
  }

  getProductsMostSold() : Observable<Product[]> {
    return this.req.browse<Product[]>('/products/sold_most', {});
  }
}
