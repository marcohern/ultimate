import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UltimateCoreModule } from '../ultimate-core/ultimate-core.module';

import { UserListComponent } from './cmps/user-list/user-list.component';
import { UserEditComponent } from './cmps/user-edit/user-edit.component';

import { UserListPage } from './pages/user-list/user-list.page';
import { UserService } from './srvs/user.service';
import { UserForm } from './forms/user/user.form';

import { routes } from './routes';
import { UserEditPage } from './pages/user-edit/user-edit.page';
@NgModule({
  declarations: [
    UserListComponent, UserEditComponent, UserForm,
    UserListPage, UserEditPage
  ],
  imports: [
    CommonModule,
    UltimateCoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ]
})
export class UltimateUsersModule { }
