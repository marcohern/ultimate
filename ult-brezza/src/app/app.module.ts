import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
import { CategoriesComponent } from './cmps/categories/categories.component';
import { MycartComponent } from './cmps/mycart/mycart.component';
import { ShopbyComponent } from './cmps/shopby/shopby.component';
import { CustomSliderComponent } from './cmps/custom-slider/custom-slider.component';
import { CompareWidgetComponent } from './cmps/compare-widget/compare-widget.component';
import { SearchByTagsComponent } from './cmps/search-by-tags/search-by-tags.component';
import { SidebarComponent } from './cmps/sidebar/sidebar.component';
import { CatsliderComponent } from './cmps/catslider/catslider.component';
import { BreadcrumbsComponent } from './cmps/breadcrumbs/breadcrumbs.component';
import { ProductsGridComponent } from './cmps/products-grid/products-grid.component';
import { ProductGridItemComponent } from './cmps/product-grid-item/product-grid-item.component';

import { IndexPage } from './pages/index/index.page';
import { AboutPage } from './pages/about/about.page';
import { SitemapPage } from './pages/sitemap/sitemap.page';
import { GridPage } from './pages/grid/grid.page';
import { TermsPage } from './pages/terms/terms.page';
import { FaqPage } from './pages/faq/faq.page';
import { PrivacyPage } from './pages/privacy/privacy.page';
import { ContactPage } from './pages/contact/contact.page';
import { NavMenuitemCustomComponent } from './cmps/nav-menuitem-custom/nav-menuitem-custom.component';
import { SentPopupComponent } from './cmps/sent-popup/sent-popup.component';

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
    CategoriesComponent,
    MycartComponent,
    ShopbyComponent,
    CustomSliderComponent,
    CompareWidgetComponent,
    SearchByTagsComponent,
    SidebarComponent,
    CatsliderComponent,
    BreadcrumbsComponent,
    ProductsGridComponent,
    ProductGridItemComponent,
    
    IndexPage,
    AboutPage,
    SitemapPage,
    GridPage,
    TermsPage,
    FaqPage,
    PrivacyPage,
    ContactPage,
    NavMenuitemCustomComponent,
    SentPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
