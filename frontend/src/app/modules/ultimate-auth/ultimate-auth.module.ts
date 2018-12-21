import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UltimateCoreModule } from '@marcohern/ultimate-core';
import { UltimateCoreUiModule } from '@marcohern/ultimate-core-ui';

import { LoginComponent } from './cmps/login/login.component';
import { RegisterComponent } from './cmps/register/register.component';

import { routes } from './routes';

import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { PrivatePage } from './pages/private/private.page';
import { PublicPage } from './pages/public/public.page';
import { InviteComponent } from './cmps/invite/invite.component';
import { InvitePage } from './pages/invite/invite.page';
import { AuthService } from './srvs/auth.service';

@NgModule({
  declarations: [
    LoginComponent, InviteComponent, RegisterComponent,

    PrivatePage, PublicPage, InvitePage, 
    LoginPage, RegisterPage, NotFoundPage, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    UltimateCoreModule,
    UltimateCoreUiModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService],
  exports: [
    LoginPage
  ]
})
export class UltimateAuthModule { }
