import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  listaProduto: Produto[]

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    this.findAll()

  }

  produtoAtivo(status: number){
    let ok: boolean = false;

    if(status == 1) {
      ok = true;
    }
    return ok;
  }

  produtoInativo(status:number){
    let ok: boolean = false;

    if(status == 0) {
      ok = true;
    }
    return ok;
  }

  findAll(){
    this.produtoService.findAll().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

}
