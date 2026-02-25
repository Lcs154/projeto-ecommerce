import { Injectable } from '@angular/core';
import { IProduto, produtos as lista } from './estoque-produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  produtos: IProduto[] = lista;
  constructor(){}
  getAll(){
    return this.produtos;
  }

  getProduto(id: number){
    return this.produtos.find(produto => produto.id === id);
  }
}
