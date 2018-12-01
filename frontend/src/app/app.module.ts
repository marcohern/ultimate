import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { UltimateAuthModule } from './modules/ultimate-auth/ultimate-auth.module';

import { AppComponent } from './app.component';

import { UltimateCoreModule } from './modules/ultimate-core/ultimate-core.module';
import { UltimateUsersModule } from './modules/ultimate-users/ultimate-users.module';
import { UltimateProductsModule } from './modules/ultimate-products/ultimate-products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UltimateCoreModule,
    UltimateAuthModule,
    UltimateUsersModule,
    UltimateProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
