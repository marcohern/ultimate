import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateProductsComponent } from './ultimate-products.component';

describe('UltimateProductsComponent', () => {
  let component: UltimateProductsComponent;
  let fixture: ComponentFixture<UltimateProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
