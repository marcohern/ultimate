import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForm } from './page.form';

describe('PageForm', () => {
  let component: PageForm;
  let fixture: ComponentFixture<PageForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
