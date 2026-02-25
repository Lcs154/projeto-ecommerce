import { Component } from '@angular/core';
import { Carrinho } from '../carrinho-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(
    public carrinho_service: Carrinho
  ){}
}
