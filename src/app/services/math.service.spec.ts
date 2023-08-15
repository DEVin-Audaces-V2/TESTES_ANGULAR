import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Teste para identificar se a função retorna um resultado válido para a soma
  it('avaliar soma entre dois números', () => {
    const result = service.soma(5, 5)
    expect(result).toEqual(10)
  })
});
