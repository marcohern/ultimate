import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemImageComponent } from './product-item-image.component';

describe('ProductItemImageComponent', () => {
  let component: ProductItemImageComponent;
  let fixture: ComponentFixture<ProductItemImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
