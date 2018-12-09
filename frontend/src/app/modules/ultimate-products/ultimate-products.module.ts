import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '../ultimate-core/ultimate-core.module';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { ImageUploadModule } from "angular2-image-upload";

import { ProductForm } from './forms/product/product.form';

import { ProductDetailComponent } from './cmps/product-detail/product-detail.component';

import { ProductListPage } from './pages/product-list/product-list.page';
import { ProductDetailPage } from './pages/product-detail/product-detail.page';
import { ProductEditPage } from './pages/product-edit/product-edit.page';

import { routes } from './routes';
import { ProductRow } from './tables/product/product.row';
import { ProductTable } from './tables/product/product.table';
import { ProductsQueryComponent } from './cmps/products-query/products-query.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductDetailComponent, ProductsQueryComponent,

    ProductForm,

    ProductRow, ProductTable,
  
    ProductListPage, ProductDetailPage, ProductEditPage,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UltimateCoreModule,
    NgxImageGalleryModule,
    RouterModule.forChild(routes),
    ImageUploadModule.forRoot(),
  ]
})
export class UltimateProductsModule { }
