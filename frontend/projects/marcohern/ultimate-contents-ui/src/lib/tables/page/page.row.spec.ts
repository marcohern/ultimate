import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRow } from './page.row';

describe('PageRow', () => {
  let component: PageRow;
  let fixture: ComponentFixture<PageRow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRow ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
