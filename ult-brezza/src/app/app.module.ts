import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { HeaderLanguageComponent } from './cmps/header-language/header-language.component';
import { HeaderCurrencyComponent } from './cmps/header-currency/header-currency.component';
import { HeaderToplinksComponent } from './cmps/header-toplinks/header-toplinks.component';
import { HeaderSearchboxComponent } from './cmps/header-searchbox/header-searchbox.component';
import { HeaderTopcartComponent } from './cmps/header-topcart/header-topcart.component';
import { HeaderNavigationComponent } from './cmps/header-navigation/header-navigation.component';
import { HeaderLogoComponent } from './cmps/header-logo/header-logo.component';
import { HeaderCultureComponent } from './cmps/header-culture/header-culture.component';
import { SliderComponent } from './cmps/slider/slider.component';
import { ProductHotComponent } from './cmps/product-hot/product-hot.component';
import { ProductItemComponent } from './cmps/product-item/product-item.component';

import { IndexPage } from './pages/index/index.page';
import { ProductsNewComponent } from './cmps/products-new/products-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLanguageComponent,
    HeaderCurrencyComponent,
    HeaderToplinksComponent,
    HeaderSearchboxComponent,
    HeaderTopcartComponent,
    HeaderNavigationComponent,
    HeaderLogoComponent,
    HeaderCultureComponent,
    SliderComponent,
    IndexPage,
    ProductHotComponent,
    ProductItemComponent,
    ProductsNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
