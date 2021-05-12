import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produto: Produto[] = []
  listaPrint: Produto[] = []
  total: number = 0

  private messageSource = new BehaviorSubject<number>(0);
  currentMessage = this.messageSource.asObservable();

  constructor(
  ) { }

  addToCarrinho(produto: Produto) {
    let cont = 0
    let contador = 0
    this.produto.forEach(element => {

      if (element.id == produto.id) {
        cont++
      }
    })
    this.produto.push(produto)


    for(let i=0; i < this.listaPrint.length; i++){
      if(this.listaPrint[i].id == produto.id){
        contador++
      }
    }

    if(contador == 0) {
      this.listaPrint.push(produto)
    }


    this.total = this.total + produto.valor

    this.messageSource.next(this.produto.length)
    this.getProdutos()
    this.contadorProduto(produto)
  }

  contadorProduto(produto: Produto){
    let quantidade =0
    for(let i=0; i < this.produto.length; i++){
      if(produto.id == this.produto[i].id){
        quantidade++
      }
    }
    return quantidade
  }

  apagarItem(produto: Produto) {
    console.log(this.contadorProduto(produto))
    const index: number = this.produto.indexOf(produto)
    if (index !== -1) {
      this.produto.splice(index, 1)
    }
    this.total = this.total - produto.valor

    this.messageSource.next(this.produto.length)


    let quantidade = this.contadorProduto(produto)
    console.log(quantidade)

    if(quantidade == 0) {
      const indexPrint: number = this.listaPrint.indexOf(produto)
      if (indexPrint !== -1) {
        this.listaPrint.splice(indexPrint, 1)
      }
      this.messageSource.next(this.listaPrint.length)
      alert("Item removido do carrinho")
      console.log(this.listaPrint)
      console.log(this.produto)
    }

    this.contadorProduto(produto)
  }

  getProdutos() {
    return this.listaPrint
  }

  limparCarrinho() {
    this.produto = []
    this.total = 0
    this.messageSource.next(this.produto.length)
    return this.produto
  }

  calculaTotal() {
    return this.total
  }

}
