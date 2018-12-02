import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavDropdownComponent } from './header-nav-dropdown.component';

describe('HeaderNavDropdownComponent', () => {
  let component: HeaderNavDropdownComponent;
  let fixture: ComponentFixture<HeaderNavDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
