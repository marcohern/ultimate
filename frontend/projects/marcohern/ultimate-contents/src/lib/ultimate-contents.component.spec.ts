import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateContentsComponent } from './ultimate-contents.component';

describe('UltimateContentsComponent', () => {
  let component: UltimateContentsComponent;
  let fixture: ComponentFixture<UltimateContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
