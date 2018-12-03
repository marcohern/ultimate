import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySidemenuComponent } from './company-sidemenu.component';

describe('CompanySidemenuComponent', () => {
  let component: CompanySidemenuComponent;
  let fixture: ComponentFixture<CompanySidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
