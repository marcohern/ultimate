import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamEditableComponent } from './param-editable.component';

describe('ParamEditableComponent', () => {
  let component: ParamEditableComponent;
  let fixture: ComponentFixture<ParamEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
