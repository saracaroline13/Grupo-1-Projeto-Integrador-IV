import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.css']
})
export class CadastraComponent implements OnInit {

  user:Usuario = new Usuario

  confirmarSenha: string
  tipoUsuario:string='Cliente'
  termoAceito:boolean = false

  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  validaTermos(event: any){
    this.termoAceito=!this.termoAceito
   console.log(this.termoAceito)
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas')
    }
    else if(this.termoAceito==false){
      alert('Para se cadastrar é necessario aceitar os termos e condições')
    }
    else{
      this.authService.cadastrar(this.user).subscribe((resp:Usuario)=>{
        this.user=resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso')
      })
    }
  }

}
