import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestService } from './srvs/request.service';
import { AssetsService } from './srvs/assets.service';

import { MenuComponent } from './cmps/menu/menu.component';
import { PagerComponent } from './cmps/pager/pager.component';
import { CheckboxesComponent } from './cmps/checkboxes/checkboxes.component';

import { TokenInterceptor } from './base/token-interceptor';
import { ParamForm } from './forms/param/param.form';
import { ParamRow } from './tables/param/param.row';
import { ParamEditableComponent } from './cmps/param-editable/param-editable.component';
import { ParamTable } from './tables/param/param.table';

@NgModule({
  declarations: [
    ParamForm, ParamRow,
    MenuComponent, PagerComponent, CheckboxesComponent, ParamEditableComponent, ParamTable,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    RequestService,
    AssetsService,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true }
  ],
  exports: [
    MenuComponent, PagerComponent, CheckboxesComponent, ParamTable
  ]
})
export class UltimateCoreModule { }
