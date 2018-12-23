import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserTable } from './tables/user/user.table';
import { UserRow } from './tables/user/user.row';
import { UserQuery } from './query/user/user.query';
import { UserForm } from './forms/user/user.form';

import { UserEditPage } from './pages/user-edit/user-edit.page';
import { UserListPage } from './pages/user-list/user-list.page';

import { UserService } from './srvs/user.service';

import { routes } from './user.routes';

@NgModule({
  declarations: [  
    UserQuery, UserTable, UserRow, UserForm, UserEditPage, UserListPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserQuery, UserForm, UserEditPage, UserListPage
  ],
  providers: [
    UserService
  ]
})
export class UltimateUsersModule { }
