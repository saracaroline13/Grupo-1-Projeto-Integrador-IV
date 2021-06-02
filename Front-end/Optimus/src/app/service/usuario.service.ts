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
    return this.http.get<Usuario[]>("http://localhost:8080/usuario")
  }

  getById(id:number):Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuario/${id}`)
  }

  getByEmail(email:string):Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuario/${email}`)
  }

  postUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8080/usuario",usuario)
  }

  putUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.put<Usuario>("http://localhost:8080/usuario",usuario)
  }

  deleteUsuario(id:number){
    return this.http.delete(`http://localhost:8080/usuario/${id}`)
  }

}
