import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRow } from './product.row';

describe('ProductRow', () => {
  let component: ProductRow;
  let fixture: ComponentFixture<ProductRow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRow ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
