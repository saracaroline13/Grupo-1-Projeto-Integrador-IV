import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
<<<<<<< HEAD
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
import { TabelaTesteComponent } from './tabela-teste/tabela-teste.component';
>>>>>>> 5c4f84ac28b6ce726fcb258557f018775161d8f7

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutoComponent,
<<<<<<< HEAD
    CadastrarProdutoComponent
=======
    TabelaTesteComponent
>>>>>>> 5c4f84ac28b6ce726fcb258557f018775161d8f7
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
