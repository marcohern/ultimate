import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToplinksComponent } from './header-toplinks.component';

describe('HeaderToplinksComponent', () => {
  let component: HeaderToplinksComponent;
  let fixture: ComponentFixture<HeaderToplinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderToplinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderToplinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
