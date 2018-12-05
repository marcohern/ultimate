import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPaymentAcceptComponent } from './footer-payment-accept.component';

describe('FooterPaymentAcceptComponent', () => {
  let component: FooterPaymentAcceptComponent;
  let fixture: ComponentFixture<FooterPaymentAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPaymentAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPaymentAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
