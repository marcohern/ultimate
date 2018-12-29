import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '@marcohern/ultimate-core';
import { UltimateCoreUiModule } from '@marcohern/ultimate-core-ui';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap';

import { ProductDetailComponent } from './cmps/product-detail/product-detail.component';
import { ProductsQueryComponent } from './cmps/products-query/products-query.component';

import { ProductForm } from './forms/product/product.form';
import { ProductDetailPage } from './pages/product-detail/product-detail.page';
import { ProductEditPage } from './pages/product-edit/product-edit.page';
import { ProductListPage } from './pages/product-list/product-list.page';
import { CategoryListPage } from './pages/category-list/category-list.page';
import { ProductRow } from './tables/product/product.row';
import { CategoryRow } from './tables/category/category.row';
import { ProductTable } from './tables/product/product.table';
import { CategoryTable } from './tables/category/category.table';

import { ProductService } from './srvs/product.service';

import { routes } from './product.routes';

@NgModule({
  declarations: [
    ProductDetailComponent, ProductsQueryComponent,
    ProductForm,
    ProductDetailPage, ProductEditPage, ProductListPage,
    CategoryListPage,
    ProductRow, CategoryRow,
    ProductTable, CategoryTable, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UltimateCoreModule,
    UltimateCoreUiModule,
    NgxImageGalleryModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    ImageUploadModule.forRoot(),
  ],
  exports: [
    ProductDetailComponent, ProductsQueryComponent,
    ProductForm,
    ProductDetailPage, ProductEditPage, ProductListPage,
    CategoryListPage,
    ProductRow, CategoryRow,
    ProductTable, CategoryTable, 
  ], providers: [
    ProductService
  ]
})
export class UltimateProductsModule { }
