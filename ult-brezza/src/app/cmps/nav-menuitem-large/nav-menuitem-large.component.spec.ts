import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuitemLargeComponent } from './nav-menuitem-large.component';

describe('NavMenuitemLargeComponent', () => {
  let component: NavMenuitemLargeComponent;
  let fixture: ComponentFixture<NavMenuitemLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuitemLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuitemLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
