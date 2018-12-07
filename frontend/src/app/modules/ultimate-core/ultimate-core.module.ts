import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestService } from './srvs/request.service';
import { MenuComponent } from './cmps/menu/menu.component';
import { PagerComponent } from './cmps/pager/pager.component';

import { TokenInterceptor } from './srvs/token-interceptor';

@NgModule({
  declarations: [MenuComponent, PagerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[
    RequestService,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true }
  ],
  exports:[MenuComponent, PagerComponent],
})
export class UltimateCoreModule { }
