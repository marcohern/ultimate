import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './modules/ultimate-auth/pages/public/public.component';

const routes: Routes = [
  {path:'', component: PublicComponent},
  {path: '*', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
