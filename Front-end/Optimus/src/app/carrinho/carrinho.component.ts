import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import { Endereco } from '../model/Endereco';
import { Itens } from '../model/Itens';
import { Pedido } from '../model/Pedido';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { EnderecoService } from '../service/endereco.service';
import { ItensService } from '../service/itens.service';
import { PedidoService } from '../service/pedido.service';
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
  valorFrete: string;
  frete: number = 0;
  cidade: string
  numero: string;
  bairro: string;
  cep: string;
  telefone: string;
  nomeDestinatario: string;
  qnt: number;

  numeroCartao: string
  nomeCartao: string
  cvv: string
  validade: string
  cpf: any
  cpfOk: boolean
 alertaCpf:String
  tipoPagamento: string

  idUser: number;

  produto = this.carrinhoService.getProdutos()
  total = this.carrinhoService.calculaTotal()

  pedido: Pedido = new Pedido();
  item: Itens = new Itens();

  constructor(
    private carrinhoService: CarrinhoService,
    private enderecoService: EnderecoService,
    private usuarioService: UsuarioService,
    private pedidoService: PedidoService,
    private itensService: ItensService,
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
  }

  apagarItem(produto: Produto) {
    this.carrinhoService.apagarItem(produto)
    this.produto = this.carrinhoService.getProdutos()

  }

  contadorProduto(produto: Produto) {
    return this.carrinhoService.contadorProduto(produto)
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
      this.cidade = this.usuario.cidade
    })
  }

  logado(){
    let ok: boolean = false
    if(this.idUser != 0 ){
      ok = true
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
      this.cidade = this.usuario.cidade
    })
  }

  mudafrete(frete: number) {
    if(frete == 0 || frete == undefined){
      alert("Insira opção do frete")
    } else {
      this.frete = frete
      this.carrinhoService.calculaFrete(frete)
      if(this.frete == 10) {
        this.valorFrete = "Valor R$ 10,00 (10 - 15 dias uteis)"
      }
      else if(this.frete == 15) {
        this.valorFrete = "Valor R$ 15,00 (5 - 7 dias uteis)"
      }
      else {
        this.valorFrete = "Valor R$ 30,00"
      }
    }
  }

  // limparListaCarrinho(produto: Produto){
  //   this.carrinhoService.removerItem(produto)
  //   this.produto = this.carrinhoService.getProdutos()
  // }

  selecEndereco(){
    this.rua = this.usuario.rua
    this.numero = this.usuario.numero
    this.bairro = this.usuario.bairro
    this.cidade = this.usuario.cidade
  }


  validaCpf() {
    if(typeof this.cpf === 'undefined'){
      this.cpfOk = false;
      this.alertaCpf = 'cpf inválido';
    }
    else if (this.cpf.length < 11 || this.cpf.length > 11) {
      this.cpfOk = false;
      this.alertaCpf = 'CPF inválido';
    } else {
      this.cpfOk = true;
      this.alertaCpf = '';


      if (this.cpf.length == 11) {

        var v1 = 0;
        var v2 = 0;
        var aux = false;

        for (let i = 1; this.cpf.length > i; i++) {
          if (this.cpf[i - 1] != this.cpf[i]) {
            aux = true;
          }
        }

        if (aux == false) {
          this.alertaCpf = 'CPF inválido';
          this.cpfOk = false;
          return false;
        }

        for (let i = 0, p = 10; (this.cpf.length - 2) > i; i++, p--) {
          v1 = v1 + this.cpf[i] * p;
        }

        v1 = ((v1 * 10) % 11);

        if (v1 == 10) {
          v1 = 0;
        }

        if (v1 != this.cpf[9]) {
          this.alertaCpf = 'CPF inválido';
          this.cpfOk = false;
          return false;
        }

        for (var i = 0, p = 11; (this.cpf.length - 1) > i; i++, p--) {
          v2 += this.cpf[i] * p;
        }

        v2 = ((v2 * 10) % 11);

        if (v2 == 10) {
          v2 = 0;
        }

        if (v2 != this.cpf[10]) {
          this.alertaCpf = 'CPF inválido';
          this.cpfOk = false;
          return false;
        } else {
          return true;
        }
      }
    }
  }

  finalizarCompra() {

    if (environment.token == "")
    {
      alert("Logue para finalizar a compra")
      this.router.navigate(["/entrar"])
    }
    else if (this.produto.length <= 0){
        alert("Você não possui itens no carrinho!")
      }
    else if (this.numeroCartao == null || this.numeroCartao.length < 16  || this.numeroCartao.length < 19  ||
      this.nomeCartao == null || this.nomeCartao.length <5 ||
      this.cvv == null || this.cvv.length != 3 ||
      this.validade == null || this.validade.length != 5 ||
      this.cpfOk == false || this.cpf == null) {

            alert("Por favor, preencha corretamente os dados do cartão")

    }
    else if(this.frete == 0 || this.frete == undefined) {
      alert("Insira opção do frete")
    }
      else{
        this.pedido.frete = this.frete
        this.pedido.usuario = this.usuario
        this.pedido.status = "Aguardando pagamento"
        this.pedido.valor = this.calculaTotal()
        this.pedido.rua = this.rua
        this.pedido.numero = this.numero
        this.pedido.bairro = this.bairro
        this.pedido.cidade = this.cidade
        this.pedido.cep = this.cep
        this.pedido.tipoPagamento = "Cartão de Credito"

        this.pedidoService.post(this.pedido).subscribe((resp:Pedido)=>{
          this.pedido=resp
          for(let i =0; i<this.produto.length; i++){
            this.item.pedido=this.pedido
            this.item.produto = this.produto[i]
            this.item.quantidade = this.contadorProduto(this.produto[i])

            this.itensService.post(this.item).subscribe((resp:Itens)=>{
              this.item=resp
            })
            this.item = new Itens()

          }
          this.limparCarrinho()
          alert("Compra finalizada com sucesso - " + this.pedido.id + " ! Para acompanhar vá até a tela de gestão de perfil!")
        })

        this.router.navigate(['/produtoCliente'])
        this.item = new Itens()
        this.pedido = new Pedido()
        this.frete = 0


      }
    }

    limparCarrinho(){
      this.carrinhoService.limparCarrinho()
    }

  calculaTotal() {
    return this.carrinhoService.calculaTotal()
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
      else if(this.frete == 0 || this.frete == undefined) {
        alert("Insira opção do frete")
      }
      else {

        alert("Compra finalizada com sucesso! Para acompanhar vá até a tela de gestão de perfil! o boleto será mandado para o email cadastrado!")

        this.pedido.frete = this.frete
        this.pedido.usuario = this.usuario
        this.pedido.status = "Aguardando pagamento"
        this.pedido.valor = this.calculaTotal()
        this.pedido.rua = this.rua
        this.pedido.numero = this.numero
        this.pedido.bairro = this.bairro
        this.pedido.cidade = this.cidade
        this.pedido.cep = this.cep
        this.pedido.tipoPagamento = "Boleto"

        this.pedidoService.post(this.pedido).subscribe((resp:Pedido)=>{
          this.pedido=resp
          for(let i =0; i<this.produto.length; i++){
            this.item.pedido=this.pedido
            this.item.produto = this.produto[i]
            this.item.quantidade = this.contadorProduto(this.produto[i])

            this.itensService.post(this.item).subscribe((resp:Itens)=>{
              this.item=resp
            })
            this.item = new Itens()

          }
          this.limparCarrinho()

        })


        this.router.navigate(['/produtoCliente'])
        this.item = new Itens()
        this.pedido = new Pedido()
        this.frete = 0
      }
    }
  }

}
