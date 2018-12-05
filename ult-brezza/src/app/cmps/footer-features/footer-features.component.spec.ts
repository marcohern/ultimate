import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFeaturesComponent } from './footer-features.component';

describe('FooterFeaturesComponent', () => {
  let component: FooterFeaturesComponent;
  let fixture: ComponentFixture<FooterFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
