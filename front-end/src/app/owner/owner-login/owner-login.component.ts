import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerServiceService } from '../../services/owner/owner-service.service';
import { apiEndPoints } from '../../constants';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrl: './owner-login.component.css',
})
export class OwnerLoginComponent {
  invalidLogin: boolean = false;
  ownerProfile;
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ownerService: OwnerServiceService
  ) {
    this.loginForm = this.formBuilder.group({
      EmailOrNumber: ['', Validators.compose([Validators.required])],
      Password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['dashboard']);
    }
  }

  login(loginData) {
    if (loginData.Password && loginData.EmailOrNumber) {
      let body;
      if (parseInt(loginData.EmailOrNumber)) {
        body = {
          phone: loginData.EmailOrNumber,
          password: loginData.Password,
        };
      } else {
        body = {
          email: loginData.EmailOrNumber,
          password: loginData.Password,
        };
      }
      this.loginMethod(body);
    }
  }

  loginMethod(body) {
    this.ownerService.loginAdmin(apiEndPoints.adminLogin, body).subscribe({
      next: (profile) => {
        this.ownerProfile = profile.data;
        this.router.navigate(['dashboard']);
        this.invalidLogin = false;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('jwt', this.ownerProfile.accessToken);
        console.log(localStorage.getItem('jwt'), 'method');
      },
      error: (error) => {
        this.invalidLogin = true;
        setTimeout(() => {
          this.invalidLogin = false;
        }, 2000);
        console.error('Error:', error);
      },
    });
  }
}
