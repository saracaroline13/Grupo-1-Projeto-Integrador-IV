import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entra',
  templateUrl: './entra.component.html',
  styleUrls: ['./entra.component.css']
})
export class EntraComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin) =>{
      this.userLogin = resp

      if(this.userLogin.status == 0) {
        alert("Perfil desativado por entrar em contato com administrador!")
        this.router.navigate(['/produtoCliente'])
      }else {
        environment.token = this.userLogin.token
        environment.id = this.userLogin.id_usuario
        environment.nome = this.userLogin.nome
        environment.tipo = this.userLogin.tipo
        environment.email = this.userLogin.email
        this.router.navigate(['/produtoCliente'])
      }

    }, erro => {
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos')
      }
    })
  }

}
