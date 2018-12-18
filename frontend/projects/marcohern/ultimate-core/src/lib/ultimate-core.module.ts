import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestService } from './srvs/request.service';
import { AssetsService } from './srvs/assets.service';

import { MenuComponent } from './cmps/menu/menu.component';
import { PagerComponent } from './cmps/pager/pager.component';
import { CheckboxesComponent } from './cmps/checkboxes/checkboxes.component';
import { UltimateCoreComponent } from './ultimate-core.component';

import { TokenInterceptor } from './base/token-interceptor';

@NgModule({
  declarations: [
    UltimateCoreComponent,
    MenuComponent, PagerComponent, CheckboxesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers:[
    RequestService,
    AssetsService,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true }
  ],
  exports: [
    UltimateCoreComponent,
    MenuComponent, PagerComponent, CheckboxesComponent
  ]
})
export class UltimateCoreModule { }
