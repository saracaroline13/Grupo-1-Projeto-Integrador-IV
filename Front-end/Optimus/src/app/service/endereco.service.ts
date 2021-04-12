import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/Endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    private http: HttpClient
    ) { }

  findAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>('http://localhost:8080/endereco')
  }

  findById(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`http://localhost:8080/endereco/${id}`)
  }

  postEndereco(endereco: Endereco): Observable<Endereco>{
    return this.http.post<Endereco>('http://localhost:8080/endereco', endereco)
  }

  putEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>('http://localhost:8080/endereco', endereco)
  }

  deleteEndereco(id: number): Observable<Endereco> {
    return this.http.delete<Endereco>(`http://localhost:8080/endereco/${id}`)
  }
}
