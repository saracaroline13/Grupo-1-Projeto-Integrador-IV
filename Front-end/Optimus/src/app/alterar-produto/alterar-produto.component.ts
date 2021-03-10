import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  tituloOk: boolean = false;
  autorOk: boolean = false;
  editoraOk: boolean = false;
  describeOk: boolean = false;
  estrelaOk: boolean = false;

  alertaTitulo: string;
  alertaAutor: string;
  alertaEditora: string;
  alertaDescribe: string;

  constructor(
    private produtoService: ProdutoService,
    private imagemService: ImagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

  this.idProduto = this.route.snapshot.params['id']
  this.findById(this.idProduto)
  this.findByIdProjeto(this.idProduto)
 
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

}
