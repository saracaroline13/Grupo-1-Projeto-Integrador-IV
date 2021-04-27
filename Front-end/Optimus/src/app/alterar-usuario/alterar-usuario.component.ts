import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Endereco } from '../model/Endereco';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { EnderecoService } from '../service/endereco.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  endereco: Endereco = new Endereco();
  listaEnderecos: Endereco[]
  listaCliente: Endereco
  estadoUsuario: string

  confirmarSenha: String;
  idUser:number;

  nome: string;
  sobrenome: string;
  rg: string;
  telefone: string;
  nascimento: string;
  cidade: string;
  cpf: any;
  rua: string;
  numero: string;
  bairro: string;
  cep: string;

  nomeOk: boolean = false;
  sobrenomeOk: boolean = false;
  rgOk: boolean = false;
  telefoneOk: boolean = false;
  nascimentoOk: boolean = false;
  cidadeOk: boolean = false;
  cpfOk: boolean = false;
  ruaOk: boolean = false;
  numeroOk: boolean = false;
  bairroOk: boolean = false;
  cepOk: boolean = false;

  listaCamposInvalidos:any = []
  alertaNome: string;
  alertaSobrenome: string;
  alertaRg: string;
  alertaTelefone: string;
  alertaNascimento: string;
  alertaCidade: string;
  alertaCpf: string;
  alertaRua: string;
  alertaNumero: string;
  alertaBairro: string;
  alertaCep: string;

  termoAceito: boolean = false
  tipoUsuario: string = 'Cliente'

  constructor(
    private usuarioService: UsuarioService,
    private route:ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private enderecoService: EnderecoService
  ) { }


  ngOnInit() {
    this.idUser=this.route.snapshot.params['id'];
    this.findAllEnderecos(this.idUser)
    this.findById(this.idUser)
  }

  findAllEnderecos(id:number) {
    this.enderecoService.findAll().subscribe((resp: Endereco[]) => {
      this.listaEnderecos = resp
      console.log(resp)
    })
  }

  enderecoAdicional(cliente: number){
    let ok: boolean = false
    if(cliente == this.idUser ){
      ok = true
    }
    return ok
  }

  findById(id:number){
    this.usuarioService.getById(id).subscribe((resp:Usuario)=>{
      this.usuario=resp;
    })
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  validaTermos(event: any) {
    this.termoAceito = !this.termoAceito
    console.log(this.termoAceito)
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

  validaNascimento() {
    if (this.nascimento.length < 8 || this.nascimento.length > 8) {
      this.nascimentoOk = false;
      this.alertaNascimento = 'nascimento inválido';
    } else {
      this.nascimentoOk = true;
      this.alertaNascimento = '';
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

  validaCidade() {
    if (this.cidade.length < 3) {
      this.cidadeOk = false;
      this.alertaCidade = 'cidade inválido';
    } else {
      this.cidadeOk = true;
      this.alertaCidade = '';
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

  validaVariaveisOk(){

    this.validaNome()
    this.validaRg()
    this.validaTelefone()
    this.validaSobrenome()


  if(this.nomeOk==false){
      this.listaCamposInvalidos.push('Nome')
  }
  if(this.sobrenomeOk==false){
      this.listaCamposInvalidos.push('Sobrenome')
  }
  if(this.rgOk==false){
    this.listaCamposInvalidos.push('RG')
  }

  if(this.telefoneOk==false){
    this.listaCamposInvalidos.push('Telefone')
  }
  }

  selectEstado(event: any) {
    this.estadoUsuario = event.target.value
  }

  resetValidação(){
    this.nomeOk=false
    this.sobrenomeOk=false
    this.rgOk=false
    this.telefoneOk=false
    this.listaCamposInvalidos=[];
  }

  atualizar() {
    this.usuario.tipo = this.tipoUsuario
    this.usuario.status = 1

    this.validaVariaveisOk()

    if(this.listaCamposInvalidos.length>0){
      alert('Por gentileza, preencher os seguintes campos corretamente:\n'
      +this.listaCamposInvalidos)

      this.resetValidação()
    }
    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas')
    }
    else if (this.termoAceito == false) {
      alert('Para se cadastrar é necessario aceitar os termos e condições')
    }
    else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        environment.token = ''
        environment.nome = ''
        environment.id = 0
        environment.email = ''
        environment.tipo = ''
        this.router.navigate(['/entrar'])
        alert('Usuário atualizado com sucesso com sucesso')
      })
    }
  }

  deletarEndereco(id:number){
    console.log(id)
    this.enderecoService.deleteEndereco(id).subscribe(()=>{
      alert('Endereço deletado com sucesso')
      this.findAllEnderecos(this.idUser);
    })
  }

}
