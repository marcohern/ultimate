import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuitemCustomComponent } from './nav-menuitem-custom.component';

describe('NavMenuitemCustomComponent', () => {
  let component: NavMenuitemCustomComponent;
  let fixture: ComponentFixture<NavMenuitemCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuitemCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuitemCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
