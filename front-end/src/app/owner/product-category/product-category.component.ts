import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerServiceService } from '../../services/owner/owner-service.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css',
})
export class ProductCategoryComponent {
  constructor(
    private router: Router,
    private ownerService: OwnerServiceService
  ) {}
  ngOnInit() {
    this.ownerService.setCurrentScreen('category');
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }
  }
}
