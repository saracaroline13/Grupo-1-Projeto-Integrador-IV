import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastra-adm',
  templateUrl: './cadastra-adm.component.html',
  styleUrls: ['./cadastra-adm.component.css']
})
export class CadastraADMComponent implements OnInit {

  user:Usuario = new Usuario
  confirmarSenha: string
  estadoUsuario: string
  cargoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  selectEstado(event: any){
    this.estadoUsuario = event.target.value
  }

  selectCargo(event: any){
    this.cargoUsuario = event.target.value
  }

  cadastrar(){
    this.user.cargo = this.cargoUsuario
    this.user.estado = this.estadoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas')
    }

    else{
      this.authService.cadastrar(this.user).subscribe((resp:Usuario)=>{
        this.user=resp
        this.router.navigate(['/home-adm'])
        alert('Funcionario cadastrado com sucesso')
      })
    }
  }

}
