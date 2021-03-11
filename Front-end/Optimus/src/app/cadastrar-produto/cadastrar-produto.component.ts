import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imagem } from '../model/Imagem';
import { Produto } from '../model/Produto';
import { ImagemService } from '../service/imagem.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  qntEstrelas: number
  novoProduto: Produto
  mostrarFoto: string

  imagem: Imagem = new Imagem()

  titulo: string;
  autor: string;
  editora: string;
  describe: string;
  valor: number;
  estoque: number;
  foto: string;
  link1: string;
  link2: string;

  tituloOk: boolean = false;
  autorOk: boolean = false;
  editoraOk: boolean = false;
  describeOk: boolean = false;
  valorOk: boolean = false;
  estoqueOk: boolean = false;
  fotoOk: boolean = false;
  link1Ok: boolean = false;
  link2Ok: boolean = false;

  alertaTitulo: string;
  alertaAutor: string;
  alertaEditora: string;
  alertaDescribe: string;
  alertaValor: string;
  alertaEstoque: string;
  alertaFoto: string;
  alertaLink1: string;
  alertaLink2: string;

  
  

  constructor(
    private produtoService: ProdutoService,
    private imagemService: ImagemService,
    private router: Router
  ) { }

  ngOnInit(){
    
  }

  validar(){
    if(
      this.tituloOk == true &&
      this.autorOk == true &&
      this.editoraOk == true &&
      this.describeOk == true &&
      this.valorOk == true &&
      this.estoqueOk == true &&
      this.fotoOk == true &&
      this.link1Ok == true &&
      this.link2Ok == true
    ){
      this.cadastrarProduto()
    }else {
      alert('Campos inválidos por favor conferir todos!')
    }
  }

  estrelas(event: any) {
    this.qntEstrelas = event.target.value;
  }

  cadastrarProduto(){
    this.produto.estrelas = this.qntEstrelas
    if(this.produto.estrelas == 0){
      this.produto.estrelas = 1
    }
    this.produto.status = 1
    
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.novoProduto = resp
      this.postagemImagem()
    })
  }

  postagemImagem(){
    
    this.imagem.idProjeto = this.novoProduto.id

    this.imagemService.postImagem(this.imagem).subscribe(() => {
      alert("Produto cadastrado com sucesso")
      this.router.navigate(['/produto'])
    })
    
  }

  mostraImagem(id:number){
    if(id == 1){
      this.mostrarFoto = this.imagem.link1
    }
    else if(id == 2){
      this.mostrarFoto = this.imagem.link2
    }
    else if(id == 3){
      this.mostrarFoto = this.imagem.link3
    }
    else if(id == 4){
      this.mostrarFoto = this.imagem.link4
    }
    else if(id == 0){
      this.mostrarFoto = this.produto.imgPrincipal
    }
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

  validaValor(){
    if(this.valor < 0 || this.valor == 0) {
      this.valorOk = false;
      this.alertaValor = 'Valor inválido'
    }
    else {
      this.valorOk = true;
      this.alertaValor = ''
    }
  }

  validaEstoque(){
    if(this.estoque < 0 || this.estoque == 0) {
      this.estoqueOk = false;
      this.alertaEstoque = 'Estoque inválido'
    }
    else {
      this.estoqueOk = true;
      this.alertaEstoque = ''
    }
  }

  validaFoto(){
    if (this.foto.length < 3) {
      this.fotoOk = false;
      this.alertaFoto = 'Foto inválida';
    } else {
      this.fotoOk = true;
      this.alertaFoto = '';
    }
  }

  validaLink1(){
    if (this.link1.length < 3) {
      this.link1Ok = false;
      this.alertaLink1 = 'Foto inválida';
    } else {
      this.link1Ok = true;
      this.alertaLink1 = '';
    }
  }

  validaLink2(){
    if (this.link2.length < 3) {
      this.link2Ok = false;
      this.alertaLink2 = 'Foto inválida';
    } else {
      this.link2Ok = true;
      this.alertaLink2 = '';
    }
  }


}
