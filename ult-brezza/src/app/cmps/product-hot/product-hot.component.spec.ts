import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHotComponent } from './product-hot.component';

describe('ProductHotComponent', () => {
  let component: ProductHotComponent;
  let fixture: ComponentFixture<ProductHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
