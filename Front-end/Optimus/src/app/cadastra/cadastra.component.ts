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
  estadoUsuario: string
  confirmSenha: string;
  listaUsuario: Usuario[];

  nome: string;
  sobrenome: string;
  rg: string;
  cpf: any;
  telefone: string;
  email: string;
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  numCPF: number;
  nascimento: string;

  nomeOk: boolean = false;
  sobrenomeOk: boolean = false;
  rgOk: boolean = false;
  cpfOk: boolean = false;
  telefoneOk: boolean = false;
  emailOk: boolean = false;
  ruaOk: boolean = false;
  numeroOk: boolean = false;
  bairroOk: boolean = false;
  cepOk: boolean = false;
  cidadeOk: boolean = false;
  nascimentoOk: boolean = false;

  alertaNome: string;
  alertaSobrenome: string;
  alertaRg: string;
  alertaCpf: string;
  alertaTelefone: string;
  alertaEmail: string;

  listaCamposInvalidos:any = []
  alertaRua: string;
  alertaNumero: string;
  alertaBairro: string;
  alertaCep: string;
  alertaCidade: string;
  alertaNascimento: string;


  tipoUsuario: string = 'Cliente'
  termoAceito: boolean = false

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listaCliente();
  }

  listaCliente() {
    this.usuarioService.getAll().subscribe((resp: Usuario[]) => {
      this.listaUsuario = resp;
    })
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value;
  }

  validaNome() {
    if (typeof this.nome === 'undefined') {
      this.nomeOk = false;
      this.alertaNome = 'nome inválido';
  }
    else if (this.nome.length < 3) {
      this.nomeOk = false;
      this.alertaNome = 'nome inválido';
    } else {
      this.nomeOk = true;
      this.alertaNome = '';
    }
  }

  validaSobrenome() {
    if (typeof this.sobrenome === 'undefined') {
      this.sobrenomeOk = false;
      this.alertaNome = 'sobrenome inválido';
  }
    else if (this.sobrenome.length < 3) {
      this.sobrenomeOk = false;
      this.alertaSobrenome = 'sobrenome inválido';
    } else {
      this.sobrenomeOk = true;
      this.alertaSobrenome = '';
    }
  }

  validaRg() {
    if(typeof this.rg === 'undefined'){
      this.rgOk = false;
      this.alertaRg = 'rg inválido';
    }
    else if (this.rg.length < 9 || this.rg.length > 9) {
      this.rgOk = false;
      this.alertaRg = 'rg inválido';
    } else {
      this.rgOk = true;
      this.alertaRg = '';
    }
  }

  validaCpf() {
    if(typeof this.cpf === 'undefined'){
      this.cpfOk = false;
      this.alertaCpf = 'cpf inválido';
    }
    else if (this.cpf.length < 11 || this.cpf.length > 11) {
      this.cpfOk = false;
      this.alertaCpf = 'CPF inválido';
    } else {
      this.cpfOk = true;
      this.alertaCpf = '';

      if (this.cpf.length == 11) {

        var v1 = 0;
        var v2 = 0;
        var aux = false;

        for (let i = 1; this.cpf.length > i; i++) {
          if (this.cpf[i - 1] != this.cpf[i]) {
            aux = true;
          }
        }

        if (aux == false) {
          this.alertaCpf = 'CPF inválido';
          return false;
        }

        for (let i = 0, p = 10; (this.cpf.length - 2) > i; i++, p--) {
          v1 = v1 + this.cpf[i] * p;
        }

        v1 = ((v1 * 10) % 11);

        if (v1 == 10) {
          v1 = 0;
        }

        if (v1 != this.cpf[9]) {
          this.alertaCpf = 'CPF inválido';
          return false;
        }

        for (var i = 0, p = 11; (this.cpf.length - 1) > i; i++, p--) {
          v2 += this.cpf[i] * p;
        }

        v2 = ((v2 * 10) % 11);

        if (v2 == 10) {
          v2 = 0;
        }

        if (v2 != this.cpf[10]) {
          this.alertaCpf = 'CPF inválido';
          return false;
        } else {
          return true;
        }
      }
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
      this.alertaEmail = '';
      this.emailExistente(this.email);
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

  validaTermos(event: any) {
    this.termoAceito = !this.termoAceito
  }

  validaVariaveisOk(){
    this.validaCpf()
    this.validaEmail()
    this.validaNome()
    this.validaRg()
    this.validaTelefone()
    this.validaSobrenome()
    this.validaRua()
    this.validaNumero()
    this.validaBairro()
    this.validaCep()
    this.validaCidade()
    this.validaNascimento()

  if(this.nomeOk==false){
      this.listaCamposInvalidos.push('Nome')
  }
  if(this.sobrenomeOk==false){
      this.listaCamposInvalidos.push('Sobrenome')
  }
  if(this.rgOk==false){
    this.listaCamposInvalidos.push('RG')
  }
  if(this.cpfOk==false){
    this.listaCamposInvalidos.push('CPF')
  }
  if(this.nascimentoOk==false){
    this.listaCamposInvalidos.push('Nascimento')
  }
  if(this.telefoneOk==false){
    this.listaCamposInvalidos.push('Telefone')
  }
  if(this.emailOk==false){
    this.listaCamposInvalidos.push('E-mail')
  }
  if(this.ruaOk==false){
    this.listaCamposInvalidos.push('Rua')
  }
  if(this.numeroOk==false){
    this.listaCamposInvalidos.push('Número')
  }
  if(this.bairroOk==false){
    this.listaCamposInvalidos.push('Bairro')
  }
  if(this.cepOk==false){
    this.listaCamposInvalidos.push('CEP')
  }

  if(this.cidadeOk==false){
    this.listaCamposInvalidos.push('Cidade')
  }

  }

  resetValidação(){
    this.nomeOk=false
    this.sobrenomeOk=false
    this.rgOk=false
    this.cpfOk=false
    this.telefoneOk=false
    this.emailOk=false
    this.ruaOk = false;
    this.numeroOk = false;
    this.bairroOk = false;
    this.cepOk = false;
    this.cidadeOk = false;
    this.nascimentoOk = false;
    this.listaCamposInvalidos=[];
  }


  selectEstado(event: any) {
    this.estadoUsuario = event.target.value
  }


  cpfExistente(cpf: any) {
    for (let usuario of this.listaUsuario) {
      if (usuario.cpf == this.usuario.cpf) {
        alert('Usuário já existe')
        this.router.navigate(['/entrar'])
        this.cpfOk = false;

      }

    }

  }

  emailExistente(email: any) {
    for (let usuario of this.listaUsuario) {
      if (usuario.email == email) {
        alert('Usuário já existe')
        this.router.navigate(['/entrar'])
        this.emailOk = false;

      }
    }

  }


  cadastrar() {
    this.cpfExistente(this.cpf)
    this.validaEmail();
    this.usuario.tipo = this.tipoUsuario
    this.usuario.status = 1

    this.validaVariaveisOk()

    if(this.listaCamposInvalidos.length>0){
      alert('Por gentileza, preencher os seguintes campos corretamente:\n'
      +this.listaCamposInvalidos)

      this.resetValidação()
    }
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
