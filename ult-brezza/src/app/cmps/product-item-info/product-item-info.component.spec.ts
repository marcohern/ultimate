import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemInfoComponent } from './product-item-info.component';

describe('ProductItemInfoComponent', () => {
  let component: ProductItemInfoComponent;
  let fixture: ComponentFixture<ProductItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
