import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
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
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.tipo == "Cliente") {
      this.router.navigate(['/produtoCliente'])
    }

    if(environment.tipo == "") {
      this.router.navigate(['/entrar-adm'])
    }
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
      this.putProduto()
   
    })

  }

habilitarStatus(id:number) {
  this.produtoService.findById(id).subscribe((resp: Produto)=>{
    this.produto= resp
    this.produto.status=1
    alert("Produto ativado com sucesso!")
    this.putProduto()
 
  })
}

  putProduto() { 
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
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
