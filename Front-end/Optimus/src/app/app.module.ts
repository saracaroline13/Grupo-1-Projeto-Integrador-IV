import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AlterarProdutoComponent } from './alterar-produto/alterar-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';
import { ProdutoClienteComponent } from './produto-cliente/produto-cliente.component';
import { CompraComponent } from './compra/compra.component';
import { EntraComponent } from './entra/entra.component';
import { CadastraComponent } from './cadastra/cadastra.component';
import { EntraADMComponent } from './entra-adm/entra-adm.component';
import { CadastraADMComponent } from './cadastra-adm/cadastra-adm.component';
import { AlterarUsuarioComponent } from './alterar-usuario/alterar-usuario.component';
import { HomeAdmComponent } from './home-adm/home-adm.component';
import { GestaoUsuarioComponent } from './gestao-usuario/gestao-usuario.component';
import { EnderecoAdicionalComponent } from './endereco-adicional/endereco-adicional.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutoComponent,
    CadastrarProdutoComponent,
    AlterarProdutoComponent,
    ListaProdutoComponent,
    PesquisaProdutoComponent,
    ProdutoClienteComponent,
    CompraComponent,
    EntraComponent,
    CadastraComponent,
    EntraADMComponent,
    CadastraADMComponent,
    AlterarUsuarioComponent,
    HomeAdmComponent,
    GestaoUsuarioComponent,
    EnderecoAdicionalComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
