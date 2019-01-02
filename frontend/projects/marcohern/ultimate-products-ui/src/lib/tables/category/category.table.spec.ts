import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTable } from './category.table';

describe('CategoryTable', () => {
  let component: CategoryTable;
  let fixture: ComponentFixture<CategoryTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
