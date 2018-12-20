import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamRow } from './param.row';

describe('ParamRow', () => {
  let component: ParamRow;
  let fixture: ComponentFixture<ParamRow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamRow ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
