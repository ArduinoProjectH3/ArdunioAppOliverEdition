import { TestBed } from '@angular/core/testing';

import { RoomdataService } from './roomdata.service';

describe('RoomdataService', () => {
  let service: RoomdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
