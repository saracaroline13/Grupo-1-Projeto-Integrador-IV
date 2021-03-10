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
  produto: Produto

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

  desabilitarStatus(id:number) {
    this.produtoService.findById(id).subscribe((resp: Produto)=>{
      this.produto= resp
      this.produto.status=0
      alert("Produto desativado com sucesso!")
      this.putProduto(this.produto)
   
    })

  }

habilitarStatus(id:number) {
  this.produtoService.findById(id).subscribe((resp: Produto)=>{
    this.produto= resp
    this.produto.status=1
    alert("Produto ativado com sucesso!")
    this.putProduto(this.produto)
 
  })
}

  putProduto(produto: Produto) {
    
    this.produtoService.putProduto(produto).subscribe((resp: Produto)=>{

      this.produto= resp
      
      this.findAll()
    })
  }



  findAll(){
    this.produtoService.findAll().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

}
