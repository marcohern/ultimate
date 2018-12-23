import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuery } from './user.query';

describe('UserQuery', () => {
  let component: UserQuery;
  let fixture: ComponentFixture<UserQuery>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuery ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
