import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnerLoginComponent } from '../app/owner/owner-login/owner-login.component';

const routes: Routes = [
  {
    path: '',
    component: OwnerLoginComponent,
  },
  { path: 'main-screen', component: OwnerLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
