import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-gestao-usuario',
  templateUrl: './gestao-usuario.component.html',
  styleUrls: ['./gestao-usuario.component.css']
})
export class GestaoUsuarioComponent implements OnInit {

  listaUsuario:Usuario[]

  constructor(
    private usuarioService:UsuarioService
  ) { }

  ngOnInit(): void {
    this.findAll()
  }

findAll() {
  this.usuarioService.getAll().subscribe((resp:Usuario[])=>{
    this.listaUsuario = resp
  })

}
}
