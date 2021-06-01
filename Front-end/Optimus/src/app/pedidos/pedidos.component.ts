import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../model/Pedido';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedido: Pedido = new Pedido()
  idPedido: number;

  constructor(
    private router: ActivatedRoute,
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.idPedido = this.router.snapshot.params['id'];
    this.findByIdPedido()
    window.scroll({
      top: 0,
    })
  }

  findByIdPedido(){
    this.pedidoService.getById(this.idPedido).subscribe((resp: Pedido) => {
      this.pedido = resp
    })
  }

}
