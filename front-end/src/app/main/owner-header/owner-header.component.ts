import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerServiceService } from '../../services/owner/owner-service.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-owner-header',
  templateUrl: './owner-header.component.html',
  styleUrl: './owner-header.component.css',
})
export class OwnerHeaderComponent {
  screen = '';
  isCollapsed = false;
  constructor(
    private router: Router,
    private ownerService: OwnerServiceService
  ) {}

  ngOnInit() {
    this.ownerService
      .getCurrentScreen()
      .pipe(take(1))
      .subscribe((data) => {
        this.screen = data;
      });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
  }

  navigate(page: string) {
    switch (page) {
      case 'dashboard':
        this.ownerService.screenName$.next('dashboard');
        this.router.navigate(['dashboard']);
        break;
      case 'category':
        this.ownerService.screenName$.next('category');
        this.router.navigate(['dashboard/category']);
        break;
      case 'profile':
        this.ownerService.screenName$.next('profile');
        this.router.navigate(['dashboard/profile']);
        break;
      case 'orders':
        this.ownerService.screenName$.next('orders');
        this.router.navigate(['dashboard/orders']);
        break;
      case 'products':
        this.ownerService.screenName$.next('products');
        this.router.navigate(['dashboard/products']);
        break;

      default:
        break;
    }
  }
}
