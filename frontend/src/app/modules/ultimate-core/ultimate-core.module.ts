import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestService } from './srvs/request.service';
import { MenuComponent } from './cmps/menu/menu.component';
import { TokenInterceptor } from './srvs/token-interceptor';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[
    RequestService,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true }
  ],
  exports:[MenuComponent],
})
export class UltimateCoreModule { }
