import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Itens } from '../model/Itens';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAll(): Observable<Itens[]> {
    return this.http.get<Itens[]>("http://localhost:8080/itens")
  }

  post(item: Itens): Observable<Itens> {
    return this.http.post<Itens>("http://localhost:8080/itens", item, this.token)
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/itens/${id}`, this.token)
  }
}