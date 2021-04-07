import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  confirmarSenha: String;
  idUser:number;

  constructor(
    private usuarioService: UsuarioService,
    private route:Router,
    private router:ActivatedRoute
  ) { }


  ngOnInit() {
    this.idUser=this.router.snapshot.params['id'];
    this.findById(this.idUser)
  }

  findById(id:number){
    this.usuarioService.getById(id).subscribe((resp:Usuario)=>{
      this.usuario=resp;
      console.log(this.usuario)
    })
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }
}