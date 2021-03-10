import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imagem } from '../model/Imagem';
import { Produto } from '../model/Produto';
import { ImagemService } from '../service/imagem.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {

  produtoModal: Produto = new Produto()
  imagem: Imagem = new Imagem()
  listaProduto: Produto[]
  pesquisa: string

  constructor(
    private activated: ActivatedRoute,
    private produtoService: ProdutoService,
    private imagemService: ImagemService
  ) { }

  ngOnInit() {

    this.pesquisa =  this.activated.snapshot.params['nome']
    this.findProduto(this.pesquisa)

  }

  findProduto(nome: string){
    this.produtoService.findByNome(nome).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  findByIdProjeto(id: number){
    this.imagemService.findByIdProjeto(id).subscribe((resp: Imagem) => {
      this.imagem = resp
    })
  }

  findById(id: number){
    this.produtoService.findById(id).subscribe((resp: Produto) => {
      this.produtoModal = resp
      this.findByIdProjeto(id)
    })
  }

}
