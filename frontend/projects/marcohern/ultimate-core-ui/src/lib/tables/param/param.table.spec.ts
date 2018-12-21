import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamTable } from './param.table';

describe('ParamTable', () => {
  let component: ParamTable;
  let fixture: ComponentFixture<ParamTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
