import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionThumbailComponent } from './auction-thubmnail.component';

describe('AuctionThumbailComponent', () => {
  let component: AuctionThumbailComponent;
  let fixture: ComponentFixture<AuctionThumbailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionThumbailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionThumbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
