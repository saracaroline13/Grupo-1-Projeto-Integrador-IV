import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarProduto(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      alert("Produto Cadastrado do sucesso")
      this.router.navigate(['/produto'])
    })
  }


}
