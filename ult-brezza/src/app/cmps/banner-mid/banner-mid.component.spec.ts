import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMidComponent } from './banner-mid.component';

describe('BannerMidComponent', () => {
  let component: BannerMidComponent;
  let fixture: ComponentFixture<BannerMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
