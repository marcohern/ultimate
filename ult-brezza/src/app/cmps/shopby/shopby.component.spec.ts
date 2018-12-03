import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbyComponent } from './shopby.component';

describe('ShopbyComponent', () => {
  let component: ShopbyComponent;
  let fixture: ComponentFixture<ShopbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
