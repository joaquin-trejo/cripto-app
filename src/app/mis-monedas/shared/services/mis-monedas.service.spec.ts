import { TestBed } from '@angular/core/testing';

import { MisMonedasService } from './mis-monedas.service';

describe('MisMonedasService', () => {
  let service: MisMonedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisMonedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
