import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../../services/owner/common/common.service';
import { apiEndPoints, baseUrl } from '../../constants';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerServiceService } from '../../services/owner/owner-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @ViewChild('closeDeleteBtn') closeDeleteBtn: ElementRef;
  @ViewChild('closeUpdateModal') closeUpdateModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;
  addProductsForm;
  editProductsForm;
  allProducts;
  deleteProductName = '';
  deleteProductArray;
  constructor(
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ownerService: OwnerServiceService
  ) {
    this.addProductsForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      amount: ['', Validators.required],
      quantity: ['', Validators.required],
      featured: ['', Validators.required],
    });
    this.editProductsForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      amount: ['', Validators.required],
      quantity: ['', Validators.required],
      featured: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllProductList();
    this.ownerService.setCurrentScreen('products');
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }
  }

  openEditModal(product) {
    this.editProductsForm.controls['productName'].setValue(product.productName);
    this.editProductsForm.controls['description'].setValue(product.description);
    this.editProductsForm.controls['categoryId'].setValue(product.categoryId);
    this.editProductsForm.controls['amount'].setValue(product.amount);
    this.editProductsForm.controls['quantity'].setValue(product.quantity);
    this.editProductsForm.controls['featured'].setValue(product.featured);
  }

  openDeleteModal(product) {
    this.deleteProductName = product.productName;
    this.deleteProductArray = product;
  }

  resetAddForm() {
    this.addProductsForm.reset();
  }
  resetEditForm() {
    this.editProductsForm.reset();
  }

  getAllProductList() {
    this.commonService
      .get(baseUrl + apiEndPoints.getAllProducts + '?page=1&limit=10')
      .subscribe((response) => {
        if (response.success) {
          this.allProducts = response.data.docs;
        }
      });
  }

  addProduct() {
    this.closeAddModal.nativeElement.click();
  }

  updateProduct() {
    this.closeUpdateModal.nativeElement.click();
  }

  deleteProduct() {
    this.closeDeleteBtn.nativeElement.click();
  }
}
