import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySidemenuLinkComponent } from './company-sidemenu-link.component';

describe('CompanySidemenuLinkComponent', () => {
  let component: CompanySidemenuLinkComponent;
  let fixture: ComponentFixture<CompanySidemenuLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySidemenuLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySidemenuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
