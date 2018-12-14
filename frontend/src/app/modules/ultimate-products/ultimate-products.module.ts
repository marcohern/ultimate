import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '@marcohern/ultimate-core';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { ImageUploadModule } from "angular2-image-upload";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { ProductForm } from './forms/product/product.form';
import { ProductRow } from './tables/product/product.row';
import { ProductTable } from './tables/product/product.table';
import { ProductsQueryComponent } from './cmps/products-query/products-query.component';
import { ProductDetailComponent } from './cmps/product-detail/product-detail.component';

import { ProductListPage   } from './pages/product-list/product-list.page';
import { ProductDetailPage } from './pages/product-detail/product-detail.page';
import { ProductEditPage   } from './pages/product-edit/product-edit.page';

import { routes } from './routes';

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
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    ImageUploadModule.forRoot(),
  ]
})
export class UltimateProductsModule { }
