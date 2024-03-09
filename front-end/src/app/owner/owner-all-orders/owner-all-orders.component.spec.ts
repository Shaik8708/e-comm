import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAllOrdersComponent } from './owner-all-orders.component';

describe('OwnerAllOrdersComponent', () => {
  let component: OwnerAllOrdersComponent;
  let fixture: ComponentFixture<OwnerAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerAllOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
