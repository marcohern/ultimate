import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './cmps/product-item/product-item.component';
import { UltimateCoreModule } from '../ultimate-core/ultimate-core.module';
import { ProductListPage } from './pages/product-list/product-list.page';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './cmps/product-detail/product-detail.component';

@NgModule({
  declarations: [ProductItemComponent, ProductListPage, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    UltimateCoreModule
  ]
})
export class UltimateProductsModule { }
