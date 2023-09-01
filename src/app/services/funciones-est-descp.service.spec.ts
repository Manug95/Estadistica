import { TestBed } from '@angular/core/testing';

import { FuncionesEstDescpService } from './funciones-est-descp.service';

describe('FuncionesEstDescpService', () => {
  let service: FuncionesEstDescpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionesEstDescpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
