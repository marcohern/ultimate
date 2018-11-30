import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RequestService } from './srvs/request.service';
import { MenuComponent } from './cmps/menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[RequestService],
  exports:[MenuComponent]
})
export class UltimateCoreModule { }
