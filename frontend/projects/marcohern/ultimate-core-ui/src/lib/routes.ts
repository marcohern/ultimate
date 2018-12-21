import { Routes } from "@angular/router";

import { NotFoundPage } from "./pages/not-found/not-found.page";
import { PrivatePage } from "./pages/private/private.page";
import { PublicPage } from "./pages/public/public.page";
import { LoginPage } from "./pages/login/login.page";
import { RegisterPage } from "./pages/register/register.page";
import { InvitePage } from "./pages/invite/invite.page";

export const routes:Routes = [
    
    {path:'notfound', component:NotFoundPage },
    
    {path:'private', component:PrivatePage },
    {path:'public', component:PublicPage },
    {path:'login', component:LoginPage },
    {path:'register', component:RegisterPage },
    {path:'invite', component:InvitePage }
];