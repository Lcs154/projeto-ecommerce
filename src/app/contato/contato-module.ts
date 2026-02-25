import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing-module';
import { Contato } from './contato';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Contato
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContatoModule { }
