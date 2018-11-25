import { Routes } from "@angular/router";

import { PrivateComponent } from "./pages/private/private.component";
import { PublicComponent } from "./pages/public/public.component";
import { LoginPage } from "./pages/login/login.page";
import { RegisterPage } from "./pages/register/register.page";


export const routes:Routes = [
    {path:'private', component:PrivateComponent },
    {path:'public', component:PublicComponent },
    {path:'login', component:LoginPage },
    {path:'register', component:RegisterPage }
];