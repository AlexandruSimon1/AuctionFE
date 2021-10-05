import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePurchasingComponent } from './create-purchasing.component';

describe('CreatePurchasingComponent', () => {
  let component: CreatePurchasingComponent;
  let fixture: ComponentFixture<CreatePurchasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePurchasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
