import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '../ultimate-core/ultimate-core.module';
import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { ProductItemComponent } from './cmps/product-item/product-item.component';
import { ProductDetailComponent } from './cmps/product-detail/product-detail.component';

import { ProductListPage } from './pages/product-list/product-list.page';
import { ProductDetailPage } from './pages/product-detail/product-detail.page';
import { routes } from '../ultimate-products/routes';

@NgModule({
  declarations: [
    ProductItemComponent, ProductDetailComponent,
  
    ProductListPage, ProductDetailPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    UltimateCoreModule,
    NgxImageGalleryModule,
    RouterModule.forChild(routes)
  ]
})
export class UltimateProductsModule { }
