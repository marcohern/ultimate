import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSignupComponent } from './footer-signup.component';

describe('FooterSignupComponent', () => {
  let component: FooterSignupComponent;
  let fixture: ComponentFixture<FooterSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
