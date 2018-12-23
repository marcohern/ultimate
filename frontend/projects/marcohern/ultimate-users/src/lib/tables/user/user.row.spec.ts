import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRow } from './user.row';

describe('UserRow', () => {
  let component: UserRow;
  let fixture: ComponentFixture<UserRow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRow ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
