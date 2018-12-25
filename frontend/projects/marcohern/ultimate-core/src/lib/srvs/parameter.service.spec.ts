import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ParameterService } from './parameter.service';

describe('ParameterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ParameterService = TestBed.get(ParameterService);
    expect(service).toBeTruthy();
  });
});
