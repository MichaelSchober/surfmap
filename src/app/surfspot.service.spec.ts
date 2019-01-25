import { TestBed } from '@angular/core/testing';

import { SurfspotService } from './surfspot.service';

describe('SurfspotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurfspotService = TestBed.get(SurfspotService);
    expect(service).toBeTruthy();
  });
});
