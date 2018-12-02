import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCultureComponent } from './header-culture.component';

describe('HeaderCultureComponent', () => {
  let component: HeaderCultureComponent;
  let fixture: ComponentFixture<HeaderCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
