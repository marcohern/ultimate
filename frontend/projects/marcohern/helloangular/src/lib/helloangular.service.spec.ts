import { TestBed } from '@angular/core/testing';

import { HelloangularService } from './helloangular.service';

describe('HelloangularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloangularService = TestBed.get(HelloangularService);
    expect(service).toBeTruthy();
  });
});
