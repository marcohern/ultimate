import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePage } from './private.page';

describe('PrivatePage', () => {
  let component: PrivatePage;
  let fixture: ComponentFixture<PrivatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
