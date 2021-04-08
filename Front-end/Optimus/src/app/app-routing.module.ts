import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
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
import { environment } from 'src/environments/environment.prod';

const routes: Routes = [

  {path:'', redirectTo: 'produtoCliente', pathMatch:'full'},
  {path:'produto', component: ProdutoComponent },
  {path:'cadastrarProduto', component: CadastrarProdutoComponent },
  {path:'produtoCliente', component: ProdutoClienteComponent },
  {path:'alterarProduto/:id', component: AlterarProdutoComponent },
  {path:'listaProdutos', component: ListaProdutoComponent },
  {path:'compra', component: CompraComponent },
  {path:'entrar', component: EntraComponent },
  {path:'cadastrar', component: CadastraComponent },
  {path:'entrar-adm', component: EntraADMComponent },
  {path:'cadastrar-adm', component: CadastraADMComponent },
  {path:'alterar-usuario/:id', component: AlterarUsuarioComponent },
  {path:'home-adm', component: HomeAdmComponent},
  {path:'gestao-usuario', component: GestaoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }