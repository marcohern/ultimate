import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesService } from './srvs/pages.service';

@NgModule({
  declarations: [
    CommonModule,
    
  ],
  imports: [
  ],
  exports: [
    CommonModule
  ],
  providers:[PagesService]
})
export class UltimateContentsModule { }
