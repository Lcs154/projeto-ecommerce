import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Foooter } from './foooter/foooter';
import { NaoEncontrado } from './nao-encontrado/nao-encontrado';
import { BarraPesquisa } from './barra-pesquisa/barra-pesquisa';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    App,
    Header,
    Foooter,
    NaoEncontrado,
    BarraPesquisa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
