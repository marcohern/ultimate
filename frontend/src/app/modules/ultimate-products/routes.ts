import { Routes } from "@angular/router";
import { ProductListPage } from "./pages/product-list/product-list.page";
import { ProductDetailPage } from "./pages/product-detail/product-detail.page";
import { ProductEditPage } from "./pages/product-edit/product-edit.page";

export const routes:Routes = [
    {path:'products', component: ProductListPage },
    {path:'product/add', component: ProductEditPage },
    {path:'product/:id', component: ProductEditPage },
];