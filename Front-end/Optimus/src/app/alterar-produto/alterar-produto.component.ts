import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Imagem } from '../model/Imagem';
import { Produto } from '../model/Produto';
import { ImagemService } from '../service/imagem.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  imagem: Imagem = new Imagem()
  mostrarFoto: string

  idProduto: number
  qntEstrelas: number
  status: number

  titulo: string;
  autor: string;
  editora: string;
  describe: string;
  foto: string;
  link1: string;
  link2: string;
  estoque: number;
  valor: number;

  tituloOk: boolean = false;
  autorOk: boolean = false;
  editoraOk: boolean = false;
  describeOk: boolean = false;
  estoqueOk: boolean = false;
  valorOk: boolean = false;
  fotoOk: boolean = false;
  link1Ok: boolean = false;
  link2Ok: boolean = false;
  estrelasOk: boolean = false;

  alertaTitulo: string;
  alertaEstrela: string;
  alertaAutor: string;
  alertaEditora: string;
  alertaDescribe: string;
  alertaFoto: string;
  alertaLink1: string;
  alertaLink2: string;
  alertaEstoque: string;
  alertaValor: string;

  constructor(
    private produtoService: ProdutoService,
    private imagemService: ImagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.tipo == "Cliente") {
      this.router.navigate(['/produtoCliente'])
    }

    if(environment.tipo == "") {
      this.router.navigate(['/entrar-adm'])
    }

  this.idProduto = this.route.snapshot.params['id']
  this.findById(this.idProduto)
  this.findByIdProjeto(this.idProduto)

  this.tituloOk = true;
  this.autorOk = true;
  this.editoraOk = true;
  this.describeOk = true;
  this.estoqueOk = true;
  this.valorOk = true;
  this.fotoOk = true;
  this.link1Ok = true;
  this.link2Ok = true;

  }

  validar(){
    if(
      this.autorOk == true &&
      this.tituloOk == true &&
      this.editoraOk == true &&
      this.describeOk == true &&
      this.valorOk == true &&
      this.estoqueOk == true &&
      this.estrelasOk == true &&
      this.fotoOk == true &&
      this.link1Ok == true &&
      this.link2Ok == true
    ){
      this.cadastrarProduto()
    }else {            
      alert('Campos inválidos por favor conferir todos!')
    }
  }

  findById(id: number) {
    this.produtoService.findById(id).subscribe((resp: Produto) => {
        this.produto = resp
        this.status = this.produto.status
    })
  }

  findByIdProjeto(id: number){
    this.imagemService.findByIdProjeto(id).subscribe((resp: Imagem) => {
      this.imagem = resp
    })
  }

  ativo(event: any){
    this.status = event.target.value
  }

  estrelas(event: any) {
    this.qntEstrelas = event.target.value;
  }

  cadastrarProduto(){
    this.produto.estrelas = this.qntEstrelas
    this.produto.status = this.status

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      alert("Produto alterado com sucesso")
      this.router.navigate(['/produto'])
    })
  }

  deletarProduto(){
    this.produtoService.deleteProduto(this.idProduto).subscribe(()=> {})

    this.imagemService.findByIdProjeto(this.idProduto).subscribe((resp: Imagem) => {
      let idImagem = resp.idImagem
      this.imagemService.deleteImagem(idImagem).subscribe(() => {
        alert("Produto apagado com sucesso")
        this.router.navigate(['/produto'])
      })
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

  produtoAtivo(){
    let ok: boolean = false;

    if(this.produto.status == 1) {
      ok = true;
      
    }
    return ok;
  }
  
  produtoInativo(){
    let ok: boolean = false;

    if(this.produto.status == 0) {
      ok = true;
      
    }
    return ok;
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

  validaEstrelas(){
    if(this.qntEstrelas < 1 || this.qntEstrelas > 5) {
      this.estrelasOk = false;
      this.alertaEstrela = 'Número Inválido';
    }
    else {
      this.estrelasOk = true;
      this.alertaEstrela = '';
    }
  }

}
