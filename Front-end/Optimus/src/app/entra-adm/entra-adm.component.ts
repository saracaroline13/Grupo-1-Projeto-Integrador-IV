import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entra-adm',
  templateUrl: './entra-adm.component.html',
  styleUrls: ['./entra-adm.component.css']
})
export class EntraADMComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin)=>{
      this.userLogin=resp

      environment.email = this.userLogin.email
      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.tipo = this.userLogin.tipo
      environment.token = this.userLogin.token

      if(this.userLogin.tipo == 'Cliente'){
        alert('AVISO: VOCÊ NÃO É UM ADM, POR FAVOR LOGUE COMO USUARIO!')
        environment.email = ''
        environment.id = 0
        environment.nome = ''
        environment.tipo = ''
        environment.token = ''
        this.router.navigate(['/entrar'])
      }
      else{
        this.router.navigate(['/home-adm'])
      }
    }, erro => {
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos')
      }
    })
  }
}
