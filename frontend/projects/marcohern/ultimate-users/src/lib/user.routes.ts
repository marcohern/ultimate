import { Routes } from "@angular/router";
import { UserEditPage } from "./pages/user-edit/user-edit.page";
import { UserListPage } from "./pages/user-list/user-list.page";

export var routes:Routes = [
    {path:'user/edit/:id', component: UserEditPage },
    {path:'users/create', component: UserEditPage },
    {path:'users', component: UserListPage }
];