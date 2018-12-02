import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLanguageComponent } from './header-language.component';

describe('HeaderLanguageComponent', () => {
  let component: HeaderLanguageComponent;
  let fixture: ComponentFixture<HeaderLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
