import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerMidComponent } from './cmps/banner-mid/banner-mid.component';
import { HeaderComponent } from './cmps/header/header.component';
import { HeaderCultureComponent } from './cmps/header-culture/header-culture.component';
import { HeaderLanguageComponent } from './cmps/header-language/header-language.component';
import { HeaderCurrencyComponent } from './cmps/header-currency/header-currency.component';
import { HeaderToplinksComponent } from './cmps/header-toplinks/header-toplinks.component';
import { HeaderSearchboxComponent } from './cmps/header-searchbox/header-searchbox.component';
import { HeaderTopcartComponent } from './cmps/header-topcart/header-topcart.component';
import { HeaderNavigationComponent } from './cmps/header-navigation/header-navigation.component';
import { HeaderLogoComponent } from './cmps/header-logo/header-logo.component';
import { SliderComponent } from './cmps/slider/slider.component';
import { ProductHotComponent } from './cmps/product-hot/product-hot.component';
import { ProductItemComponent } from './cmps/product-item/product-item.component';
import { ProductsNewComponent } from './cmps/products-new/products-new.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { ProductsBestsellersComponent } from './cmps/products-bestsellers/products-bestsellers.component';
import { ProductItemDivComponent } from './cmps/product-item-div/product-item-div.component';
import { ProductsFeaturedComponent } from './cmps/products-featured/products-featured.component';
import { MobileMenuComponent } from './cmps/mobile-menu/mobile-menu.component';
import { ProductsLatestComponent } from './cmps/products-latest/products-latest.component';
import { NavMenuitemSimpleComponent } from './cmps/nav-menuitem-simple/nav-menuitem-simple.component';
import { NavMenuitemWideComponent } from './cmps/nav-menuitem-wide/nav-menuitem-wide.component';
import { NavMenuitemLargeComponent } from './cmps/nav-menuitem-large/nav-menuitem-large.component';
import { NavMenuitemWide4Component } from './cmps/nav-menuitem-wide4/nav-menuitem-wide4.component';
import { CompanySidemenuComponent } from './cmps/company-sidemenu/company-sidemenu.component';
import { CompanySidemenuLinkComponent } from './cmps/company-sidemenu-link/company-sidemenu-link.component';

import { IndexPage } from './pages/index/index.page';
import { AboutPage } from './pages/about/about.page';
import { SitemapPage } from './pages/sitemap/sitemap.page';

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
    ProductHotComponent,
    ProductItemComponent,
    ProductsNewComponent,
    FooterComponent,
    ProductsBestsellersComponent,
    ProductItemDivComponent,
    BannerMidComponent,
    ProductsFeaturedComponent,
    MobileMenuComponent,
    ProductsLatestComponent,
    NavMenuitemSimpleComponent,
    NavMenuitemWideComponent,
    NavMenuitemLargeComponent,
    NavMenuitemWide4Component,
    CompanySidemenuComponent,
    CompanySidemenuLinkComponent,
    
    IndexPage,
    AboutPage,
    SitemapPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
