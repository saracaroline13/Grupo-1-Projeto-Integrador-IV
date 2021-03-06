import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

  this.idProduto = this.route.snapshot.params['id']
  this.findById(this.idProduto)

  }

  findById(id: number) {
    this.produtoService.findById(id).subscribe((resp: Produto) => {
        this.produto = resp
    })
  }

  cadastrarProduto(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      alert("Produto alterado com sucesso")
      this.router.navigate(['/produto'])
    })
  }

  deletarProduto(){
    this.produtoService.deleteProduto(this.idProduto).subscribe(() => {
      alert("Produto apagado com sucesso")
      this.router.navigate(['/produto'])
    })
  }

}
