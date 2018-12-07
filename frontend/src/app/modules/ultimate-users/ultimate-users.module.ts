import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '../ultimate-core/ultimate-core.module';

import { UserListComponent } from './cmps/user-list/user-list.component';
import { UserEditComponent } from './cmps/user-edit/user-edit.component';

import { UserListPage } from './pages/user-list/user-list.page';
import { UserService } from './srvs/user.service';

import { routes } from './routes';

@NgModule({
  declarations: [
    UserListComponent, UserEditComponent,
    UserListPage
  ],
  imports: [
    CommonModule,
    UltimateCoreModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ]
})
export class UltimateUsersModule { }
