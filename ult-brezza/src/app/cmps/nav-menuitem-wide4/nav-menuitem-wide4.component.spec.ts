import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuitemWide4Component } from './nav-menuitem-wide4.component';

describe('NavMenuitemWide4Component', () => {
  let component: NavMenuitemWide4Component;
  let fixture: ComponentFixture<NavMenuitemWide4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuitemWide4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuitemWide4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
