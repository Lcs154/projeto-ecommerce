import { Component } from '@angular/core';
import { IProduto } from '../estoque-produtos';
import { ProdutosService } from '../produtos-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  produtos: IProduto[] | undefined;
  
  constructor(
    private produtos_service: ProdutosService,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(){
    const produtos = this.produtos_service.getAll()
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
      if(descricao){
        this.produtos = produtos.filter(produto=> produto.descricao.toLowerCase().includes(descricao))
        return
      }

      this.produtos = produtos;
    });
  }
}
