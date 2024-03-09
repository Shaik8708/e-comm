import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-header',
  templateUrl: './owner-header.component.html',
  styleUrl: './owner-header.component.css',
})
export class OwnerHeaderComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login']);
  }

  navigate(page: string) {
    switch (page) {
      case 'category':
        this.router.navigate(['dashboard/category']);
        break;
      case 'profile':
        this.router.navigate(['dashboard/profile']);
        break;
      case 'orders':
        this.router.navigate(['dashboard/orders']);
        break;

      default:
        break;
    }
  }
}
