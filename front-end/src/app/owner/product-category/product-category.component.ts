import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerServiceService } from '../../services/owner/owner-service.service';
import { CommonService } from '../../services/owner/common/common.service';
import { apiEndPoints, baseUrl } from '../../constants';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css',
})
export class ProductCategoryComponent {
  @ViewChild('closeDeleteBtn') closeDeleteBtn: ElementRef;
  @ViewChild('closeUpdateModal') closeUpdateModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;

  allCategories;
  updateCategoryForm;
  deleteCategoryName;
  addNewCategoryForm;
  deleteCategoryArray;
  updateCategoryArray;
  constructor(
    private router: Router,
    private ownerService: OwnerServiceService,
    private commonService: CommonService,
    private formBuilder: FormBuilder
  ) {
    this.updateCategoryForm = this.formBuilder.group({
      CategoryName: ['', Validators.required],
      CategoryDescription: ['', Validators.required],
    });
    this.addNewCategoryForm = this.formBuilder.group({
      CategoryName: ['', Validators.required],
      CategoryDescription: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.ownerService.setCurrentScreen('category');
    this.getCategories();
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }
  }

  getCategories() {
    this.commonService
      .get(baseUrl + apiEndPoints.getAllCategories)
      .subscribe((response) => {
        this.allCategories = response.data.docs;
      });
  }

  openEditModal(category) {
    this.updateCategoryForm.controls['CategoryName'].setValue(
      category.categoryName
    );
    this.updateCategoryForm.controls['CategoryDescription'].setValue(
      category.description
    );
    this.updateCategoryArray = category;
  }

  openDeleteModal(category) {
    this.deleteCategoryName = category.categoryName;
    this.deleteCategoryArray = category;
  }

  deleteCategory() {
    this.closeDeleteBtn.nativeElement.click();
    this.commonService
      .delete(
        baseUrl +
          apiEndPoints.deleteCategory +
          '/' +
          this.deleteCategoryArray._id
      )
      .subscribe((response) => {
        if (response.success) {
          this.getCategories();
        }
      });
  }

  resetUpdateForm() {
    this.updateCategoryForm.reset();
  }

  resetAddForm() {
    this.addNewCategoryForm.reset();
  }

  updateCategory() {
    let body = {
      categoryName: this.updateCategoryForm.controls['CategoryName'].value,
      description:
        this.updateCategoryForm.controls['CategoryDescription'].value,
    };
    this.commonService
      .patch(
        baseUrl +
          apiEndPoints.updateCategory +
          '/' +
          this.updateCategoryArray._id,
        body
      )
      .subscribe((response) => {
        if (response.success) {
          this.getCategories();
        }
      });
    this.closeUpdateModal.nativeElement.click();
  }

  addCategory() {
    this.closeAddModal.nativeElement.click();
    let body = {
      categoryName: this.addNewCategoryForm.controls['CategoryName'].value,
      description:
        this.addNewCategoryForm.controls['CategoryDescription'].value,
    };
    this.commonService
      .post(baseUrl + apiEndPoints.createCategory, body)
      .subscribe((response) => {
        if (response.success) {
          this.getCategories();
          this.resetAddForm();
        }
      });
  }
}
