import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = { headers: new HttpHeaders().set('Authorization',environment.token)}

  getAll():Observable<Usuario[]> {
    return this.http.get<Usuario[]>("http://localhost:8080/usuario",this.token)
  }

  getById(id:number):Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuario/${id}`,this.token)
  }

  getByEmail(email:string):Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuario/${email}`, this.token)
  }

  postUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8080/usuario",usuario, this.token)
  }

  putUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.put<Usuario>("http://localhost:8080/usuario",usuario, this.token)
  }

  deleteUsuario(id:number){
    return this.http.delete(`http://localhost:8080/usuario/${id}`,this.token)
  }

}