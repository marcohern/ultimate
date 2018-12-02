import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLatestComponent } from './products-latest.component';

describe('ProductsLatestComponent', () => {
  let component: ProductsLatestComponent;
  let fixture: ComponentFixture<ProductsLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
