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
  qntEstrelas: number

  titulo: string;
  autor: string;
  editora: string;
  describe: string;

  tituloOk: boolean = false;
  autorOk: boolean = false;
  editoraOk: boolean = false;
  describeOk: boolean = false;

  alertaTitulo: string;
  alertaAutor: string;
  alertaEditora: string;
  alertaDescribe: string;

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  estrelas(event: any) {
    this.qntEstrelas = event.target.value;
  }

  cadastrarProduto(){
    this.produto.estrelas = this.qntEstrelas
    this.produto.status = 1

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      alert("Produto Cadastrado do sucesso")
      this.router.navigate(['/produto'])
    })
  }

  validaTitulo() {
    if (this.titulo.length < 3) {
      this.tituloOk = false;
      this.alertaTitulo = 'titulo inválido';
    } else {
      this.tituloOk = true;
      this.alertaTitulo = '';
    }
  }

  validaAutor() {
    if (this.autor.length < 3) {
      this.autorOk = false;
      this.alertaAutor = 'autor inválido';
    } else {
      this.autorOk = true;
      this.alertaAutor = '';
    }
  }

  validaEditora() {
    if (this.editora.length < 3) {
      this.editoraOk = false;
      this.alertaEditora = 'editora inválido';
    } else {
      this.editoraOk = true;
      this.alertaEditora = '';
    }
  }

  validaDescribe() {
    if (this.describe.length < 3) {
      this.describeOk = false;
      this.alertaDescribe = 'describe inválido';
    } else {
      this.describeOk = true;
      this.alertaDescribe = '';
    }
  }


}
