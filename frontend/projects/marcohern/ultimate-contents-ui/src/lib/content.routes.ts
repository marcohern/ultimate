import { Routes } from "@angular/router";
import { PageListPage } from "./pages/page-list/page-list.page";
import { PageEditPage } from "./pages/page-edit/page-edit.page";

export const routes:Routes = [
    {path:'pages', component:PageListPage},
    {path:'page/add', component:PageEditPage},
];