import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UltimateCoreModule } from '@marcohern/ultimate-core';

import { CheckboxesComponent } from './cmps/checkboxes/checkboxes.component';
import { MenuComponent } from './cmps/menu/menu.component';
import { PagerComponent } from './cmps/pager/pager.component';
import { ParamEditableComponent } from './cmps/param-editable/param-editable.component';
import { InviteComponent } from './cmps/invite/invite.component';
import { LoginComponent } from './cmps/login/login.component';
import { RegisterComponent } from './cmps/register/register.component';

import { ParamForm } from './forms/param/param.form';
import { ParamRow } from './tables/param/param.row';
import { ParamTable } from './tables/param/param.table';

import { InvitePage } from './pages/invite/invite.page';
import { LoginPage } from './pages/login/login.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { PrivatePage } from './pages/private/private.page';
import { PublicPage } from './pages/public/public.page';
import { RegisterPage } from './pages/register/register.page';
import { ParamsPage } from './pages/params/params.page';

import { AuthService } from './srvs/auth.service';
import { routes } from './routes';

@NgModule({
  declarations: [
    CheckboxesComponent, MenuComponent, PagerComponent, ParamEditableComponent,
    InviteComponent, LoginComponent, RegisterComponent,

    ParamForm,

    ParamRow, ParamTable,

    InvitePage, LoginPage, NotFoundPage, PrivatePage,
    PublicPage, RegisterPage, ParamsPage
  ],
  imports: [
    UltimateCoreModule, CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CheckboxesComponent, MenuComponent, PagerComponent, ParamEditableComponent,
    InviteComponent, LoginComponent, RegisterComponent,

    ParamForm,

    ParamRow, ParamTable,

    InvitePage, LoginPage, NotFoundPage, PrivatePage,
    PublicPage, RegisterPage, ParamsPage
  ],
  providers: [
    AuthService
  ]
})
export class UltimateCoreUiModule { }
