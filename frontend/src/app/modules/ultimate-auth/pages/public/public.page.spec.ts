import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPage } from './public.page';

describe('PublicComponent', () => {
  let component: PublicPage;
  let fixture: ComponentFixture<PublicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
