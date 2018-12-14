import { TestBed } from '@angular/core/testing';

import { UltimateCoreService } from './ultimate-core.service';

describe('UltimateCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UltimateCoreService = TestBed.get(UltimateCoreService);
    expect(service).toBeTruthy();
  });
});
