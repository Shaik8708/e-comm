import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerLoginComponent } from './owner/owner-login/owner-login.component';
import { OwnerDashboardComponent } from './owner/owner-dashboard/owner-dashboard.component';
import { FooterComponent } from './main/footer/footer.component';
import { OwnerHeaderComponent } from './main/owner-header/owner-header.component';
import { ProductCategoryComponent } from './owner/product-category/product-category.component';
import { OwnerProfileComponent } from './owner/owner-profile/owner-profile.component';
import { OwnerAllOrdersComponent } from './owner/owner-all-orders/owner-all-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerLoginComponent,
    OwnerDashboardComponent,
    FooterComponent,
    OwnerHeaderComponent,
    ProductCategoryComponent,
    OwnerProfileComponent,
    OwnerAllOrdersComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
