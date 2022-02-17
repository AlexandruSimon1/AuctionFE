import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingPromptComponent } from './bidding-prompt.component';

describe('BiddingPromptComponent', () => {
  let component: BiddingPromptComponent;
  let fixture: ComponentFixture<BiddingPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddingPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
