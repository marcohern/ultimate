import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPage } from './modules/ultimate-auth/pages/public/public.page';

const routes: Routes = [
  {path:'', component: PublicPage},
  {path: '*', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
