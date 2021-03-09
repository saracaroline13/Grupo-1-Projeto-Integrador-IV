import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { AlterarProdutoComponent } from './alterar-produto/alterar-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

const routes: Routes = [

  {path:'', redirectTo: 'produto', pathMatch:'full'},

  {path:'produto', component: ProdutoComponent },
  {path:'cadastrarProduto', component: CadastrarProdutoComponent },
  {path:'alterarProduto/:id', component: AlterarProdutoComponent },
  {path:'listaProdutos', component: ListaProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
