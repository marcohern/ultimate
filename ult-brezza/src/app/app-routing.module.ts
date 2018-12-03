import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './pages/index/index.page';
import { AboutPage } from './pages/about/about.page';
import { SitemapPage } from './pages/sitemap/sitemap.page';

const routes: Routes = [
  {path:'', component: IndexPage},
  {path:'about', component: AboutPage},
  {path:'sitemap', component: SitemapPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
