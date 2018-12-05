import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentPopupComponent } from './sent-popup.component';

describe('SentPopupComponent', () => {
  let component: SentPopupComponent;
  let fixture: ComponentFixture<SentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
