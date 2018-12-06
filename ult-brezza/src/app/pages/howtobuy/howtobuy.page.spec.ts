import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtobuyPage } from './howtobuy.page';

describe('HowtobuyPage', () => {
  let component: HowtobuyPage;
  let fixture: ComponentFixture<HowtobuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtobuyPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtobuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
