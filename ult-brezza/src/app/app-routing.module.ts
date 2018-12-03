import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './pages/index/index.page';
import { AboutPage } from './pages/about/about.page';

const routes: Routes = [
  {path:'', component: IndexPage},
  {path:'about', component: AboutPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
