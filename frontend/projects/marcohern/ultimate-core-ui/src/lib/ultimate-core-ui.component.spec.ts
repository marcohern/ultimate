import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateCoreUiComponent } from './ultimate-core-ui.component';

describe('UltimateCoreUiComponent', () => {
  let component: UltimateCoreUiComponent;
  let fixture: ComponentFixture<UltimateCoreUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateCoreUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateCoreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
