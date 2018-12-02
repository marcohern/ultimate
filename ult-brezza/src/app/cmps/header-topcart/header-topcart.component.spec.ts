import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopcartComponent } from './header-topcart.component';

describe('HeaderTopcartComponent', () => {
  let component: HeaderTopcartComponent;
  let fixture: ComponentFixture<HeaderTopcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTopcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
