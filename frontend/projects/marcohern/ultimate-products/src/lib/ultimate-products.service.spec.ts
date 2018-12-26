import { TestBed } from '@angular/core/testing';

import { UltimateProductsService } from './ultimate-products.service';

describe('UltimateProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UltimateProductsService = TestBed.get(UltimateProductsService);
    expect(service).toBeTruthy();
  });
});
