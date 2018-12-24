import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsPage } from './params.page';

describe('ParamsPage', () => {
  let component: ParamsPage;
  let fixture: ComponentFixture<ParamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
