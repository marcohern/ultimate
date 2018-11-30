import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePage } from './invite.page';

describe('InviteComponent', () => {
  let component: InvitePage;
  let fixture: ComponentFixture<InvitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
