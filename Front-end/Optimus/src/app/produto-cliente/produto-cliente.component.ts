import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Imagem } from '../model/Imagem';
import { Produto } from '../model/Produto';
import { CarrinhoService } from '../service/carrinho.service';
import { ImagemService } from '../service/imagem.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-cliente',
  templateUrl: './produto-cliente.component.html',
  styleUrls: ['./produto-cliente.component.css']
})
export class ProdutoClienteComponent implements OnInit {

  listaProduto: Produto[]
  produtoModal: Produto = new Produto()
  imagem: Imagem = new Imagem()
  lista: Imagem[]

  constructor(
    private produtoService: ProdutoService,
    private imagemService: ImagemService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.findAll()
    this.find()
  }

  find() {
    this.imagemService.findAllImagem().subscribe((resp: Imagem[]) => {
      this.lista = resp
    })
  }

  addToCarrinho(produto: Produto) {
    this.carrinhoService.addToCarrinho(produto)
    alert("Item adicionado com sucesso")
  }

  compraProduto(produto: Produto) {
    this.carrinhoService.addToCarrinho(produto)
  }


  findAll() {
    this.produtoService.findAll().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  findById(id: number) {
    this.produtoService.findById(id).subscribe((resp: Produto) => {
      this.produtoModal = resp
      this.findByIdProjeto(id)
    })
  }

  findByIdProjeto(id: number) {
    this.imagemService.findByIdProjeto(id).subscribe((resp: Imagem) => {
      this.imagem = resp
    })
  }

  produtoAtivo(status: number){
    let ok: boolean = false;

    if(status == 1) {
      ok = true;
    }
    return ok;
  }

}
