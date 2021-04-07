import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastra-adm',
  templateUrl: './cadastra-adm.component.html',
  styleUrls: ['./cadastra-adm.component.css']
})
export class CadastraADMComponent implements OnInit {

  usuario: Usuario = new Usuario()
  estadoUsuario: string
  cargoUsuario: string
  tipoUsuario: string

  confirmSenha: string;

  nome: string;
  sobrenome: string;
  rg: string;
  cpf: string;
  telefone: string;
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  salario: string;
  email: string;
  emailEmpresarial: string;
  nascimento: string;

  nomeOk: boolean = false;
  sobrenomeOk: boolean = false;
  rgOk: boolean = false;
  cpfOk: boolean = false;
  telefoneOk: boolean = false;
  ruaOk: boolean = false;
  numeroOk: boolean = false;
  bairroOk: boolean = false;
  cepOk: boolean = false;
  cidadeOk: boolean = false;
  salarioOk: boolean = false;
  emailOk: boolean = false;
  emailEmpresarialOk: boolean = false;
  nascimentoOk: boolean = false;

  alertaNome: string;
  alertaSobrenome: string;
  alertaRg: string;
  alertaCpf: string;
  alertaTelefone: string;
  alertaRua: string;
  alertaNumero: string;
  alertaBairro: string;
  alertaCep: string;
  alertaCidade: string;
  alertaSalario: string;
  alertaEmail: string;
  alertaEmailEmpresarial: string;
  alertaNascimento: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.tipo == "Cliente") {
      this.router.navigate(['/produtoCliente'])
    }

    if(environment.tipo == "") {
      this.router.navigate(['/entrar-adm'])
    }
    window.scroll(0, 0)
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

  validaRua() {
    if (this.rua.length < 3) {
      this.ruaOk = false;
      this.alertaRua = 'rua inválido';
    } else {
      this.ruaOk = true;
      this.alertaRua = '';
    }
  }

  validaNumero() {
    if (this.numero.length < 1 || this.numero.length > 4) {
      this.numeroOk = false;
      this.alertaNumero = 'numero inválido';
    } else {
      this.numeroOk = true;
      this.alertaNumero = '';
    }
  }

  validaBairro() {
    if (this.bairro.length < 3) {
      this.bairroOk = false;
      this.alertaBairro = 'bairro inválido';
    } else {
      this.bairroOk = true;
      this.alertaBairro = '';
    }
  }

  validaCep() {
    if (this.cep.length < 8 || this.cep.length > 8) {
      this.cepOk = false;
      this.alertaCep = 'cep inválido';
    } else {
      this.cepOk = true;
      this.alertaCep = '';
    }
  }

  validaCidade() {
    if (this.cidade.length < 3) {
      this.cidadeOk = false;
      this.alertaCidade = 'cidade inválido';
    } else {
      this.cidadeOk = true;
      this.alertaCidade = '';
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

  validaEmailEmpresarial() {
    if (this.emailEmpresarial.length < 3) {
      this.emailEmpresarialOk = false;
      this.alertaEmailEmpresarial = 'Email empresarial inválido';
    } else {
      this.emailEmpresarialOk = true;
      this.alertaEmailEmpresarial = '';
    }
  }

  validaNascimento() {
    if (this.nascimento.length < 8 || this.nascimento.length > 8) {
      this.nascimentoOk = false;
      this.alertaNascimento = 'nascimento inválido';
    } else {
      this.nascimentoOk = true;
      this.alertaNascimento = '';
    }
  }

  validaSalario() {
    if (this.salario.length < 1) {
      this.salarioOk = false;
      this.alertaSalario = 'salario inválido';
    } else {
      this.salarioOk = true;
      this.alertaSalario = '';
    }
  }

  selectEstado(event: any) {
    this.estadoUsuario = event.target.value
  }

  selectCargo(event: any) {
    this.cargoUsuario = event.target.value
  }

  cadastrar() {
    this.usuario.cargo = this.cargoUsuario
    this.usuario.tipo = this.cargoUsuario
    this.usuario.estado = this.estadoUsuario
    this.usuario.status = 1

    if (this.usuario.senha != this.confirmSenha) {
      alert('As senhas estão incorretas')
    }

    else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/home-adm'])
        alert('Funcionario cadastrado com sucesso')
      })
    }
  }

}
