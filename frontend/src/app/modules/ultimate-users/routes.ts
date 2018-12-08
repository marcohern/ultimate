import { Routes } from "@angular/router";
import { UserListPage } from "./pages/user-list/user-list.page";
import { UserEditPage } from "./pages/user-edit/user-edit.page";

export const routes:Routes = [
    {path:'user/edit/:id', component: UserEditPage },
    {path:'users/create', component: UserEditPage },
    {path:'users', component: UserListPage }
];