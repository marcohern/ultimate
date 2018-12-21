import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestService } from './srvs/request.service';
import { AssetsService } from './srvs/assets.service';


import { TokenInterceptor } from './base/token-interceptor';
import { ParameterService } from './srvs/parameter.service';

@NgModule({
  declarations: [
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
    ParameterService,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true }
  ],
  exports: [
  ]
})
export class UltimateCoreModule { }
