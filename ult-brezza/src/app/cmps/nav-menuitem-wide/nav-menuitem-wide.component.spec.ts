import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuitemWideComponent } from './nav-menuitem-wide.component';

describe('NavMenuitemWideComponent', () => {
  let component: NavMenuitemWideComponent;
  let fixture: ComponentFixture<NavMenuitemWideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuitemWideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuitemWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
