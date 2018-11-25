import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { UltimateAuthModule } from './modules/ultimate-auth/ultimate-auth.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UltimateAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
