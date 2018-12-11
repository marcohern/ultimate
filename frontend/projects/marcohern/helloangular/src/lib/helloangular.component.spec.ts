import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloangularComponent } from './helloangular.component';

describe('HelloangularComponent', () => {
  let component: HelloangularComponent;
  let fixture: ComponentFixture<HelloangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
