import { Routes } from "@angular/router";
import { ProductListPage } from "./pages/product-list/product-list.page";
import { ProductDetailPage } from "./pages/product-detail/product-detail.page";

export const routes:Routes = [
    {path:'products', component: ProductListPage },
    {path:'product', component: ProductDetailPage },
    {path:'product/:slug', component: ProductDetailPage },
];