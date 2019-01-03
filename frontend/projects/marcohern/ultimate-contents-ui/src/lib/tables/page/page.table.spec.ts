import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTable } from './page.table';

describe('PageTable', () => {
  let component: PageTable;
  let fixture: ComponentFixture<PageTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
