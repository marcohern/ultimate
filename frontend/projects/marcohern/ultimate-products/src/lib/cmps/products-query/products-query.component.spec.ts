import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsQueryComponent } from './products-query.component';

describe('ProductsQueryComponent', () => {
  let component: ProductsQueryComponent;
  let fixture: ComponentFixture<ProductsQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
