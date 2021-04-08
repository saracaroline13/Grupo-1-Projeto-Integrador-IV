import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-gestao-usuario',
  templateUrl: './gestao-usuario.component.html',
  styleUrls: ['./gestao-usuario.component.css']
})
export class GestaoUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario()
  listaUsuario: Usuario[]

  constructor(
    private usuarioService: UsuarioService,
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

  findAll() {
    this.usuarioService.getAll().subscribe((resp: Usuario[]) => {
      this.listaUsuario = resp
    })

  }
  usuarioAtivo(status: number) {
    let ok: boolean = false;

    if (status == 1) {
      ok = true;
    }
    return ok;
  }

  usuarioInativo(status: number) {
    let ok: boolean = false;

    if (status == 0) {
      ok = true;
    }
    return ok;
  }

  desabilitarStatus(id: number) {
    this.usuarioService.getById(id).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.usuario.status = 0
      alert("Usuario desativado com sucesso!")
      this.putUsuario(this.usuario)

    })

  }

  habilitarStatus(id: number) {
    this.usuarioService.getById(id).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.usuario.status = 1
      alert("Usuario ativado com sucesso!")
      this.putUsuario(this.usuario)

    })
  }

  putUsuario(usuario: Usuario) {
    this.usuarioService.putUsuario(usuario).subscribe((resp: Usuario)=> {
      this.usuario = resp
      this.findAll()
    })
  }

}
