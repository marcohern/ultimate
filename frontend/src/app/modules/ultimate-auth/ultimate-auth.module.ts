import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '../ultimate-core/ultimate-core.module';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './cmps/login/login.component';
import { RegisterComponent } from './cmps/register/register.component';

import { routes } from './routes';

import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { PrivatePage } from './pages/private/private.page';
import { PublicPage } from './pages/public/public.page';

@NgModule({
  declarations: [
    LoginComponent,
    PrivatePage, PublicPage, RegisterComponent,
    
    LoginPage, RegisterPage, NotFoundPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    UltimateCoreModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginPage
  ]
})
export class UltimateAuthModule { }
