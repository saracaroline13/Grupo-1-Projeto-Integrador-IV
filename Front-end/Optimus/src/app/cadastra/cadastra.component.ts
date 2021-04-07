import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.css']
})
export class CadastraComponent implements OnInit {

  usuario: Usuario = new Usuario();

  confirmSenha: string;

  nome: string;
  sobrenome: string;
  rg: string;
  cpf: string;
  telefone: string;
  email: string;

  nomeOk: boolean = false;
  sobrenomeOk: boolean = false;
  rgOk: boolean = false;
  cpfOk: boolean = false;
  telefoneOk: boolean = false;
  emailOk: boolean = false;

  alertaNome: string;
  alertaSobrenome: string;
  alertaRg: string;
  alertaCpf: string;
  alertaTelefone: string;
  alertaEmail: string;

  tipoUsuario: string = 'Cliente'
  termoAceito: boolean = false
  
  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value;
  }

  validaNome() {
    if (this.nome.length < 3) {
      this.nomeOk = false;
      this.alertaNome = 'nome inválido';
      console.log("entrei")
    } else {
      this.nomeOk = true;
      this.alertaNome = '';
      console.log("sei la")
    }
  }

  validaSobrenome() {
    if (this.sobrenome.length < 3) {
      this.sobrenomeOk = false;
      this.alertaSobrenome = 'sobrenome inválido';
    } else {
      this.sobrenomeOk = true;
      this.alertaSobrenome = '';
    }
  }

  validaRg() {
    if (this.rg.length < 9 || this.rg.length > 9) {
      this.rgOk = false;
      this.alertaRg = 'rg inválido';
    } else {
      this.rgOk = true;
      this.alertaRg = '';
    }
  }

  validaCpf() {
    if (this.cpf.length < 11 || this.cpf.length > 11) {
      this.cpfOk = false;
      this.alertaCpf = 'CPF inválido';
    } else {
      this.cpfOk = true;
      this.alertaCpf = '';
    }
  }

  validaTelefone() {
    if (this.telefone.length < 11 || this.telefone.length > 11) {
      this.telefoneOk = false;
      this.alertaTelefone = 'telefone inválido';
    } else {
      this.telefoneOk = true;
      this.alertaTelefone = '';
    }
  }

  validaEmail() {
    if (this.email.length < 3) {
      this.emailOk = false;
      this.alertaEmail = 'email inválido';
    } else {
      this.emailOk = true;
      this.alertaEmail = '';
    }
  }

  validaTermos(event: any) {
    this.termoAceito = !this.termoAceito
    console.log(this.termoAceito)
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario
    this.usuario.status = 1

    if (this.usuario.senha != this.confirmSenha) {
      alert('As senhas estão incorretas')
    }
    else if (this.termoAceito == false) {
      alert('Para se cadastrar é necessario aceitar os termos e condições')
    }
    else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso')
      })
    }
  }

}
