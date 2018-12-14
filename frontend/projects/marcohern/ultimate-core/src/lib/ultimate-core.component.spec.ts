import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateCoreComponent } from './ultimate-core.component';

describe('UltimateCoreComponent', () => {
  let component: UltimateCoreComponent;
  let fixture: ComponentFixture<UltimateCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
