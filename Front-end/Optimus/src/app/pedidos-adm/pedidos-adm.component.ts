import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/Pedido';
import { Produto } from '../model/Produto';
import { CarrinhoService } from '../service/carrinho.service';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-pedidos-adm',
  templateUrl: './pedidos-adm.component.html',
  styleUrls: ['./pedidos-adm.component.css']
})
export class PedidosAdmComponent implements OnInit {

  pedido:Pedido
  status:string

  key = 'data'
  reverse = true


  listaPedidos: Pedido[] 
  constructor(
    private pedidoService: PedidoService,
    private carrinhoService: CarrinhoService
  ) { }



  ngOnInit() {
    this.findAllPedidos()
  }

  findAllPedidos(){
    this.pedidoService.getAll().subscribe((resp:Pedido[])=>{
      this.listaPedidos = resp
      this.findById(1)
    })
  }

  findById(id: number){
    this.pedidoService.getById(id).subscribe((resp:Pedido)=>{
      this.pedido = resp
      this.status = this.pedido.status
    })
  }

  postPedido(){
    this.pedidoService.post(this.pedido).subscribe((resp:Pedido)=>{
      this.pedido = resp
      this.findAllPedidos()
      alert("STATUS ALTERADO COM SUCESSO")
    })

  }

  contadorProduto(produto: Produto) {
    return this.carrinhoService.contadorProduto(produto)
  }

}
