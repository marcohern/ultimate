import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDivComponent } from './product-item-div.component';

describe('ProductItemDivComponent', () => {
  let component: ProductItemDivComponent;
  let fixture: ComponentFixture<ProductItemDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
