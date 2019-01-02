import { TestBed } from '@angular/core/testing';

import { UltimateContentsService } from './ultimate-contents.service';

describe('UltimateContentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UltimateContentsService = TestBed.get(UltimateContentsService);
    expect(service).toBeTruthy();
  });
});
