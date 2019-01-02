import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UltimateCoreModule } from '@marcohern/ultimate-core';
import { UltimateCoreUiModule } from '@marcohern/ultimate-core-ui';
import { UltimateUsersModule } from '@marcohern/ultimate-users';
import { UltimateProductsModule } from '@marcohern/ultimate-products';
import { UltimateProductsUiModule } from '@marcohern/ultimate-products-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UltimateCoreModule,
    UltimateCoreUiModule,
    UltimateUsersModule,
    UltimateProductsModule,
    UltimateProductsUiModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
