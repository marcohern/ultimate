import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTagsComponent } from './search-by-tags.component';

describe('SearchByTagsComponent', () => {
  let component: SearchByTagsComponent;
  let fixture: ComponentFixture<SearchByTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
