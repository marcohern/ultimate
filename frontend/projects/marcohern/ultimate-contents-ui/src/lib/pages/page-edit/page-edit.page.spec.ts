import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditPage } from './page-edit.page';

describe('PageEditPage', () => {
  let component: PageEditPage;
  let fixture: ComponentFixture<PageEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
