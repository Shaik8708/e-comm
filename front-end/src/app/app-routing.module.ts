import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnerLoginComponent } from '../app/owner/owner-login/owner-login.component';
import { OwnerDashboardComponent } from '../app/owner/owner-dashboard/owner-dashboard.component';
import { ProductCategoryComponent } from '../app/owner/product-category/product-category.component';
import { OwnerProfileComponent } from '../app/owner/owner-profile/owner-profile.component';
import { OwnerAllOrdersComponent } from '../app/owner/owner-all-orders/owner-all-orders.component';
import { ProductsComponent } from '../app/owner/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: OwnerLoginComponent,
  },
  { path: 'login', component: OwnerLoginComponent },
  { path: 'dashboard', component: OwnerDashboardComponent },
  { path: 'dashboard/category', component: ProductCategoryComponent },
  { path: 'dashboard/profile', component: OwnerProfileComponent },
  { path: 'dashboard/orders', component: OwnerAllOrdersComponent },
  { path: 'dashboard/products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
