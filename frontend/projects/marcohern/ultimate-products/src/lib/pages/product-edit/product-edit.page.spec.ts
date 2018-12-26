import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditPage } from './product-edit.page';

describe('ProductEditPage', () => {
  let component: ProductEditPage;
  let fixture: ComponentFixture<ProductEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
