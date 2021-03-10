import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagem } from '../model/Imagem';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {
  constructor(
    private http: HttpClient
  ) { }

  //GetAll - findAll
  findAllImagem(): Observable<Imagem[]> {
    return this.http.get<Imagem[]>('http://localhost:8080/imagem')
  }

  // Find pelo id do projeto
  findByIdProjeto(id: number): Observable<Imagem>{
    return this.http.get<Imagem>(`http://localhost:8080/imagem/projeto/${id}`)
  }

  //post - postImagem
  postImagem(imagem: Imagem): Observable<Imagem>{
    return this.http.post<Imagem>('http://localhost:8080/imagem', imagem)
  }

  //put - putImagem
  putImagem(imagem: Imagem): Observable<Imagem> {
    return this.http.put<Imagem>('http://localhost:8080/imagem', imagem)
  }

  //delete - deleteImagem
  deleteImagem(id: number): Observable<Imagem> {
    return this.http.delete<Imagem>(`http://localhost:8080/imagem/${id}`)
  }

}
