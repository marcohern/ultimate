import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '../ultimate-core/ultimate-core.module';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { ImageUploadModule } from "angular2-image-upload";

import { ProductItemComponent } from './cmps/product-item/product-item.component';
import { ProductDetailComponent } from './cmps/product-detail/product-detail.component';
import { ProductFormComponent } from './cmps/product-form/product-form.component';

import { ProductListPage } from './pages/product-list/product-list.page';
import { ProductDetailPage } from './pages/product-detail/product-detail.page';
import { ProductEditPage } from './pages/product-edit/product-edit.page';

import { routes } from './routes';

@NgModule({
  declarations: [
    ProductItemComponent, ProductDetailComponent, ProductFormComponent,
  
    ProductListPage, ProductDetailPage, ProductEditPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    UltimateCoreModule,
    NgxImageGalleryModule,
    RouterModule.forChild(routes),
    ImageUploadModule.forRoot(),
  ]
})
export class UltimateProductsModule { }
