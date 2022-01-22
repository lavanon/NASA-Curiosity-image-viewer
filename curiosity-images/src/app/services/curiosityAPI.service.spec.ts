import { TestBed } from '@angular/core/testing';

import { CuriosityAPIService } from './curiosityAPI.service';

describe('CuriosityAPIService', () => {
  let service: CuriosityAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriosityAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
