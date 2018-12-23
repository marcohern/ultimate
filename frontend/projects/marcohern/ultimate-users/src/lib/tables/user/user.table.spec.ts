import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTable } from './user.table';

describe('UserTable', () => {
  let component: UserTable;
  let fixture: ComponentFixture<UserTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
