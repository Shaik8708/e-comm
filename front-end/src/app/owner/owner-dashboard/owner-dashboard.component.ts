import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerServiceService } from '../../services/owner/owner-service.service';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrl: './owner-dashboard.component.css',
})
export class OwnerDashboardComponent {
  constructor(
    private router: Router,
    private ownerService: OwnerServiceService
  ) {}
  ngOnInit() {
    this.ownerService.setCurrentScreen('dashboard');
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }
  }
}
