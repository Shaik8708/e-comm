import { Component } from '@angular/core';
import { OwnerServiceService } from '../../services/owner/owner-service.service';

@Component({
  selector: 'app-owner-all-orders',
  templateUrl: './owner-all-orders.component.html',
  styleUrl: './owner-all-orders.component.css',
})
export class OwnerAllOrdersComponent {
  constructor(private ownerService: OwnerServiceService) {}

  ngOnInit() {
    this.ownerService.setCurrentScreen('orders');
  }
}
