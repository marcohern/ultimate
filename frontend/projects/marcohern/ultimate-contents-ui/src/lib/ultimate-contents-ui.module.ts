import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UltimateContentsModule } from '@marcohern/ultimate-contents';

import { PageListPage } from './pages/page-list/page-list.page';
import { PageEditPage } from './pages/page-edit/page-edit.page';

import { PageTable } from './tables/page/page.table';
import { PageRow } from './tables/page/page.row';
import { PageForm } from './forms/page/page.form';

import { routes } from './content.routes';

@NgModule({
  declarations: [PageTable, PageRow, PageListPage, PageForm, PageEditPage],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule,
    UltimateContentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [PageListPage, PageTable, PageRow, PageForm, PageEditPage]
})
export class UltimateContentsUiModule { }
