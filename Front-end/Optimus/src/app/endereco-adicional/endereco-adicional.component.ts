import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-endereco-adicional',
  templateUrl: './endereco-adicional.component.html',
  styleUrls: ['./endereco-adicional.component.css']
})
export class EnderecoAdicionalComponent implements OnInit {
  usuario: Usuario = new Usuario();
  estadoUsuario: string
  
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



  constructor() { }

  ngOnInit() {

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

  selectEstado(event: any) {
    this.estadoUsuario = event.target.value
  }

}
