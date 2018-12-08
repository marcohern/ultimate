import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTable } from './product.table';

describe('ProductTable', () => {
  let component: ProductTable;
  let fixture: ComponentFixture<ProductTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
