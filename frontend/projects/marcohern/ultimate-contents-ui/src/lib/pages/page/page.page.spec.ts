import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePage } from './page.page';

describe('PagePage', () => {
  let component: PagePage;
  let fixture: ComponentFixture<PagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
