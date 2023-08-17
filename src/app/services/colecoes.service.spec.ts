import { TestBed } from '@angular/core/testing';

import { ColecoesService } from './colecoes.service';

describe('ColecoesService', () => {
  let service: ColecoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColecoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retornar as 5 maiores colecoes', () => {
    const result = service.top5ColecoesMaioresOrcamentos()

    // Teste 1
    if (service.colecoes.length === 0) {
      expect(result).toEqual([])
    }

    // Teste 2
    expect(result).toBeDefined() //Verifica se a função retorna algo     

    // Teste 3 - verificar se é um array
    expect(Array.isArray(result)).toBe(true)

    // Teste 4 - verificar se as coleções são retornadas
    expect(result.length).toBeGreaterThan(0)

    // Teste 5
    expect(result.length).toBeLessThanOrEqual(5)

    // Teste 6 - verificar se cada item possui as chaves esperadas
    const expectedKeys = ['nome', 'responsavel', 'orcamento']    
    result.forEach(item => {      
      expectedKeys.forEach(key => {
        // expect(item.hasOwnProperty(key)).toBe(true)
        expect(item[key]).toBeDefined() 
      })
    })

    // Teste 7
    const sortedResult = [...result]
    sortedResult.sort((a, b) => b.orcamento - a.orcamento) // ordenação decrescente
    expect(result).toEqual(sortedResult) // verificar se o resultado está ordenado



    /**
     * 1 - Realizar chamada da função e verificar se ela retorna algo
     * 2 - Verificar se o retorno é um array
     * 3 - Retornar quantidade de coleções totais
     *  3.1 - se coleções totais <= 5 então retorno todas as coleções registradas
     *  3.2 - se coleções totais > 5 então retorno 5 coleções.
     * 
     * 4 - Verifico se o result possui os itens que eram esperados
     * 5 - Verifico se o result está ordenado
     */
  })
});
