import { TestBed } from '@angular/core/testing';

import { UltimateContentsUiService } from './ultimate-contents-ui.service';

describe('UltimateContentsUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UltimateContentsUiService = TestBed.get(UltimateContentsUiService);
    expect(service).toBeTruthy();
  });
});
