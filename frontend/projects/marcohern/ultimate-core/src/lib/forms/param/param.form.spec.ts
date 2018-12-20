import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamForm } from './param.form';

describe('ParamForm', () => {
  let component: ParamForm;
  let fixture: ComponentFixture<ParamForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
