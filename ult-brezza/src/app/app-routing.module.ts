import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './pages/index/index.page';
import { AboutPage } from './pages/about/about.page';
import { SitemapPage } from './pages/sitemap/sitemap.page';
import { GridPage } from './pages/grid/grid.page';

const routes: Routes = [
  {path:'', component: IndexPage},
  {path:'about', component: AboutPage},
  {path:'sitemap', component: SitemapPage},
  {path:'grid', component: GridPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
