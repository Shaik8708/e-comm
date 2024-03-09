import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css',
})
export class ProductCategoryComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }
  }
}
