import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuitemSimpleComponent } from './nav-menuitem-simple.component';

describe('NavMenuitemSimpleComponent', () => {
  let component: NavMenuitemSimpleComponent;
  let fixture: ComponentFixture<NavMenuitemSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuitemSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuitemSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
