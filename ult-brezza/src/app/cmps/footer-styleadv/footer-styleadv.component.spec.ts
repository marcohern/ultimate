import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyleadvComponent } from './footer-styleadv.component';

describe('FooterStyleadvComponent', () => {
  let component: FooterStyleadvComponent;
  let fixture: ComponentFixture<FooterStyleadvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStyleadvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStyleadvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
