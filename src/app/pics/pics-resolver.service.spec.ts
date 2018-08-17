import { TestBed, inject } from '@angular/core/testing';

import { PicsResolver } from './pics-resolver.service';

describe('PicsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicsResolver]
    });
  });

  it('should be created', inject([PicsResolver], (service: PicsResolver) => {
    expect(service).toBeTruthy();
  }));
});
