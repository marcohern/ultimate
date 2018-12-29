import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRow } from './category.row';

describe('CategoryRow', () => {
  let component: CategoryRow;
  let fixture: ComponentFixture<CategoryRow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryRow ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
