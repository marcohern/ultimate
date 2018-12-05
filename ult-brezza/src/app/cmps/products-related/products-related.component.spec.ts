import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRelatedComponent } from './products-related.component';

describe('ProductsRelatedComponent', () => {
  let component: ProductsRelatedComponent;
  let fixture: ComponentFixture<ProductsRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
