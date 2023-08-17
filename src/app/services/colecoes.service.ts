import { Injectable } from '@angular/core';

interface IColecoes {
  nome?: string;
  responsavel: string;
  orcamento: number;
}

@Injectable({
  providedIn: 'root'
})
export class ColecoesService {

  colecoes: IColecoes[] = [
    {
      nome: 'Coleção A',
      responsavel: 'Responsável A',
      orcamento: 3000
    },
    {
      nome: 'Coleção B',
      responsavel: 'Responsável B',
      orcamento: 5000
    },
    {
      nome: 'Coleção C',
      responsavel: 'Responsável C',
      orcamento: 4000
    },
    {
      nome: 'Coleção D',
      responsavel: 'Responsável D',
      orcamento: 5500
    },
    {
      nome: 'Coleção E',
      responsavel: 'Responsável E',
      orcamento: 8500
    },
    {
      nome: 'Coleção F',
      responsavel: 'Responsável F',
      orcamento: 1500
  }];

  constructor() { }

  top5ColecoesMaioresOrcamentos(): any[] {
    // passar o teste 1
    if (this.colecoes.length === 0) {
      return []
    }

    // const sortedColecoes = [...this.colecoes]
    const sortedColecoes = this.colecoes.sort((a, b) => b.orcamento - a.orcamento)

    return sortedColecoes.slice(0, 5)
  }


}
