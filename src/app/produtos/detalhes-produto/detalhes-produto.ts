import { Component } from '@angular/core';
import { ProdutosService } from '../../produtos-service';
import { IProduto, IProdutoCarrinho } from '../../estoque-produtos';
import { ActivatedRoute } from '@angular/router';
import { Carrinho } from '../../carrinho-service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: false,
  templateUrl: './detalhes-produto.html',
  styleUrl: './detalhes-produto.css',
})
export class DetalhesProduto {
  produto: IProduto | undefined
  quantidade = 1

  constructor(
    private produto_service: ProdutosService,
    private route: ActivatedRoute,
    private carrinho_service: Carrinho
  ){}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap
    const id = Number(routeParams.get("id"))
    this.produto = this.produto_service.getProduto(id)
  }

  adicionarCarrinho(){
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    
    this.carrinho_service.adicionarCarrinho(produto)
  }

}
