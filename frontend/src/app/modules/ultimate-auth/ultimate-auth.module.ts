import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './cmps/login/login.component';

import { PrivateComponent } from './pages/private/private.component';
import { PublicComponent } from './pages/public/public.component';
import { LoginPage } from './pages/login/login.page';

import { routes } from './routes';
import { RegisterComponent } from './cmps/register/register.component';
import { RegisterPage } from './pages/register/register.page';


@NgModule({
  declarations: [
    LoginComponent,
    PrivateComponent, PublicComponent, RegisterComponent,
    
    LoginPage, RegisterPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginPage
  ]
})
export class UltimateAuthModule { }
