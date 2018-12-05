import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAccountComponent } from './footer-account.component';

describe('FooterAccountComponent', () => {
  let component: FooterAccountComponent;
  let fixture: ComponentFixture<FooterAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
