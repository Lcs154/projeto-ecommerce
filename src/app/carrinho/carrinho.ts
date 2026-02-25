import { Component } from '@angular/core';
import { IProdutoCarrinho } from '../estoque-produtos';
import { Carrinho as Cart} from '../carrinho-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: false,
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  itens_carrinho: IProdutoCarrinho[] = [];
  total: number = 0

  constructor(
    public carrinho_service: Cart,
    private router: Router
  ){}

  ngOnInit(){
    this.itens_carrinho = this.carrinho_service.itensCarrinho()
    this.totalPagar()
  }

  removerCarrinho(id:number){
    this.itens_carrinho = this.itens_carrinho.filter(produto => produto.id !== id)
    this.carrinho_service.removerCarrinho(id)
    this.totalPagar()
  }

  totalPagar(){
    this.total = this.itens_carrinho.reduce((prev, curr)=> prev + (curr.preco * curr.quantidade), 0) //percorre o vetor executando essa operação
  }

  comprar(){
    alert("Obrigado pela preferência, volte sempre!")
    this.carrinho_service.limparCarrinho()
    this.router.navigate([""])
  }
  
}
