import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  //GetAll - findAll
  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/produto')
  }

  //GetById - findById
  findById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`http://localhost:8080/produto/${id}`)
  }

  //post - postProduto
  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/produto', produto)
  }

  //put - putProduto
  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('http://localhost:8080/produto', produto)
  }

  //delete - deleteProduto
  deleteProduto(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`http://localhost:8080/produto/${id}`)
  }

}
