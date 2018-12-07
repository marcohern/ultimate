import { Routes } from "@angular/router";
import { UserListPage } from "./pages/user-list/user-list.page";
import { InvitePage } from "../ultimate-auth/pages/invite/invite.page";

export const routes:Routes = [
    {path:'user/edit/:id', component: InvitePage },
    {path:'users', component: UserListPage }
];