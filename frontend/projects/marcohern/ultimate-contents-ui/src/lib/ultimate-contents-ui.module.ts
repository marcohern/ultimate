import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UltimateContentsModule } from '@marcohern/ultimate-contents';

import { PageTable } from './tables/page/page.table';
import { PageRow } from './tables/page/page.row';
import { PagePage } from './pages/page/page.page';

import { routes } from './content.routes';

@NgModule({
  declarations: [PageTable, PageRow, PagePage],
  imports: [
    CommonModule,
    UltimateContentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [PagePage, PageTable, PageRow]
})
export class UltimateContentsUiModule { }
