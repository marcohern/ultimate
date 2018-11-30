import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './cmps/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '../ultimate-core/ultimate-core.module';

import { routes } from './routes';
import { UserEditComponent } from './cmps/user-edit/user-edit.component';

@NgModule({
  declarations: [UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    UltimateCoreModule,
    RouterModule.forChild(routes)
  ]
})
export class UltimateUsersModule { }
