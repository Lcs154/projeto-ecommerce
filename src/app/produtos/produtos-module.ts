import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { Produtos } from './produtos';
import { DetalhesProduto } from './detalhes-produto/detalhes-produto';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Produtos,
    DetalhesProduto
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
