import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UltimateCoreModule } from '@marcohern/ultimate-core';
import { UltimateCoreUiModule } from '@marcohern/ultimate-core-ui';
//import { UltimateUsersModule } from './modules/ultimate-users/ultimate-users.module';
import { UltimateProductsModule } from './modules/ultimate-products/ultimate-products.module';
import { UltimateUsersModule } from '@marcohern/ultimate-users';

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
    UltimateProductsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
