import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateContentsUiComponent } from './ultimate-contents-ui.component';

describe('UltimateContentsUiComponent', () => {
  let component: UltimateContentsUiComponent;
  let fixture: ComponentFixture<UltimateContentsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateContentsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateContentsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
