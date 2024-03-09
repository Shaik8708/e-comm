import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerServiceService } from '../../services/owner/owner-service.service';
import { apiEndPoints } from '../../constants';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrl: './owner-profile.component.css',
})
export class OwnerProfileComponent {
  profileForm;

  constructor(
    private router: Router,
    private ownerService: OwnerServiceService,
    private formBuilder: FormBuilder
  ) {
    this.profileForm = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }
    this.ownerService
      .getAdminProfile(apiEndPoints.getProfile)
      .subscribe((profile) => {
        console.log(profile);
        this.profileForm.controls['fullName'].setValue(profile.data.fullName);
        this.profileForm.controls['email'].setValue(profile.data.email);
        this.profileForm.controls['phoneNumber'].setValue(
          profile.data.phoneNumber
        );
      });
  }

  updateProfile() {}
}
