import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPage } from './modules/ultimate-auth/pages/public/public.page';
import { ProductListPage } from './modules/ultimate-products/pages/product-list/product-list.page';
import { ProductDetailComponent } from './modules/ultimate-products/cmps/product-detail/product-detail.component';

const routes: Routes = [
  {path:'products', component: ProductListPage},
  {path:'product', component: ProductDetailComponent},
  {path:'', component: PublicPage},
  {path: '*', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
