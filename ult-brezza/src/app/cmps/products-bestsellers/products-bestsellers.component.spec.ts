import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBestsellersComponent } from './products-bestsellers.component';

describe('ProductsBestsellersComponent', () => {
  let component: ProductsBestsellersComponent;
  let fixture: ComponentFixture<ProductsBestsellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsBestsellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
