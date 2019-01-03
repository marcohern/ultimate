import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesService } from './srvs/pages.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers:[PagesService]
})
export class UltimateContentsModule { }
