import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './estoque-produtos';

@Injectable({
  providedIn: 'root',
})
export class Carrinho {
  itens: IProdutoCarrinho[] = [];

  constructor(){}

  itensCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens
  }

  adicionarCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto)
    localStorage.setItem("carrinho", JSON.stringify(this.itens)) // converte o item para string e passa para localStorage
    // salvando o carrinho
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  removerCarrinho(id: number){
    this.itens = this.itens.filter(item => item.id !== id)
    localStorage.setItem("carrinho", JSON.stringify(this.itens)) // sobrescreve o localStorage
  }
}
