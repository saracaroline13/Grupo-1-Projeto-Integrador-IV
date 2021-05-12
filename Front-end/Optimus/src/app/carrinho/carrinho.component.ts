import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import { Endereco } from '../model/Endereco';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { EnderecoService } from '../service/endereco.service';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  usuario: Usuario = new Usuario()
  endereco: Endereco = new Endereco();
  listaEnderecos: Endereco[]

  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  telefone: number;
  nomeDestinatario: string;
  qnt: number;

  numeroCartao: string = "1234 5678 9101 1121"
  nomeCartao: string = "SENHOR GREEN STYLE"
  cvv: string = "011"
  validade: string = "03/25"
  cpf: string = "401.593.682-46"

  idUser: number;

  produto = this.carrinhoService.getProdutos()
  total = this.carrinhoService.calculaTotal()

  constructor(
    private carrinhoService: CarrinhoService,
    private enderecoService: EnderecoService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.idUser = environment.id
    this.UsuarioPeloId()
    this.findAllEnderecos()
  }

  addToCarrinho(produto: Produto) {
    this.carrinhoService.addToCarrinho(produto)
    this.produto = this.carrinhoService.getProdutos()
    this.contadorProduto(produto)
  }

  apagarItem(produto: Produto) {
    this.carrinhoService.apagarItem(produto)
    this.produto = this.carrinhoService.getProdutos()
    this.contadorProduto(produto)
  }

  contadorProduto(produto: Produto) {
    this.qnt = this.carrinhoService.contadorProduto(produto)
  }

  UsuarioPeloId(){
    this.usuarioService.getById(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.rua = this.usuario.rua
      this.numero = this.usuario.numero
      this.bairro = this.usuario.bairro
      this.telefone = this.usuario.telefone
      this.nomeDestinatario = this.usuario.nome
      this.cep = this.usuario.cep

    })
  }

  logado(){
    let ok: boolean = false
    if(this.idUser == 0 ){
      ok = false
    }
    return ok
  }

  findAllEnderecos() {
    this.enderecoService.findAll().subscribe((resp: Endereco[]) => {
      this.listaEnderecos = resp
    })
  }

  enderecoAdicional(cliente: number){
    let ok: boolean = false
    if(cliente == this.idUser ){
      ok = true
    }
    return ok
  }

  selecionarEndereco(id: number){
    this.enderecoService.findById(id).subscribe((resp: Endereco) => {
      this.endereco = resp
      this.rua = this.endereco.rua
      this.numero = this.endereco.numero
      this.bairro = this.endereco.bairro
      this.cep = this.endereco.cep
      this.nomeDestinatario = this.usuario.nome
      this.telefone = this.usuario.telefone
    })
  }

  selecEndereco(){
    this.rua = this.usuario.rua
    this.numero = this.usuario.numero
    this.bairro = this.usuario.bairro
  }

  finalizarCompra() {

    if (environment.token == "") 
    {
      alert("Logue para finalizar a compra")
    }
    else {
      if (this.produto.length <= 0) {
        alert("Você não possui itens no carrinho!")
      }
      else {
        if (this.rua == null && this.numero == null && this.bairro == null && this.cep == null && this.telefone == null && this.nomeDestinatario == null) {

          alert("Por favor, preencha corretamente os dados de entrega")
        }
        else {

          if (this.numeroCartao == null && this.nomeCartao == null && this.cvv == null && this.validade == null && this.cpf == null) {
            alert("Por favor, preencha corretamente os dados do cartão")
          }
          // else {
          //   this.produto.forEach(element => {
          //     element.disponivel = false
          //     this.produtoService.putProduto(element).subscribe((resp: Produto) => { element = resp })
          //   });
          // }
        }

        alert("Compra finalizada com sucesso! Você receberá uma confirmação por email assim que o pagamento for aprovado")
        this.carrinhoService.limparCarrinho()
        this.router.navigate(['/home'])
      }
    }
  }

  finalizarCompraBoleto()
  {
    if (environment.token == "") 
    {
      alert("Logue para finalizar a compra")
    }
    else {
      if (this.produto.length <= 0) {
        alert("Você não possui itens no carrinho!")
      }
      else {
        alert("O boleto foi gerado e enviado para o email cadastrado")
        this.carrinhoService.limparCarrinho()
        this.router.navigate(['/home'])
      }
    }
  }



  calculaTotal() {
    return this.carrinhoService.calculaTotal()
  }

}