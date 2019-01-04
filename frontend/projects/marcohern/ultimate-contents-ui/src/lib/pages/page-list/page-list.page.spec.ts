import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPage } from './page-list.page';

describe('PagePage', () => {
  let component: PageListPage;
  let fixture: ComponentFixture<PageListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
