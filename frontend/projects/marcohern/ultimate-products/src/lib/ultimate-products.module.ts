import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimateCoreModule } from '@marcohern/ultimate-core';

import { ProductService } from './srvs/product.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UltimateCoreModule,
  ],
  exports: [
  ], providers: [
    ProductService
  ]
})
export class UltimateProductsModule { }
