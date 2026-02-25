import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  form_contato;
  constructor( private fb: FormBuilder ){
    this.form_contato = this.fb.group({
      nome: ["", [
        Validators.minLength(4),
        Validators.required
      ]],
      assunto:["", [
        Validators.minLength(10),
        Validators.required
      ]],
      telefone:["",[
        Validators.minLength(11),
        Validators.required
      ]],
      email:["",[
        Validators.email,
        Validators.required
      ]],
      mensagem: ["", [
        Validators.minLength(20),
        Validators.required
      ]]
    })
  }

  enviarForm(){
    alert("Mensagem enviada!")
    this.form_contato.reset()
  }

};
