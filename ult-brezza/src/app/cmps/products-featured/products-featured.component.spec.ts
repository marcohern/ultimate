import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFeaturedComponent } from './products-featured.component';

describe('ProductsFeaturedComponent', () => {
  let component: ProductsFeaturedComponent;
  let fixture: ComponentFixture<ProductsFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
