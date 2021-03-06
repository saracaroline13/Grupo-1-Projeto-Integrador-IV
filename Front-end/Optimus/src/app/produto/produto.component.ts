import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProduto: Produto[]

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    this.findAll()

  }

  findAll(){
    this.produtoService.findAll().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }
  
}
