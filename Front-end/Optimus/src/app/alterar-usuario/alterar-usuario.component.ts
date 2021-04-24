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
  listaEnderecos:Endereco

  confirmarSenha: String;
  idUser:number;

  nome: string;
  sobrenome: string;
  rg: string;
  telefone: string;

  nomeOk: boolean = false;
  sobrenomeOk: boolean = false;
  rgOk: boolean = false;
  telefoneOk: boolean = false;

  listaCamposInvalidos:any = []
  alertaNome: string;
  alertaSobrenome: string;
  alertaRg: string;
  alertaTelefone: string;


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

  validaTermos(event: any) {
    this.termoAceito = !this.termoAceito
    console.log(this.termoAceito)
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

  validaTelefone() {
    if (this.telefone.length < 11 || this.telefone.length > 11) {
      this.telefoneOk = false;
      this.alertaTelefone = 'telefone inválido';
    } else {
      this.telefoneOk = true;
      this.alertaTelefone = '';
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
    this.enderecoService.deleteEndereco(id).subscribe((resp:Endereco)=>{
      alert('Endereço deletado com sucesso')
    })
  }

}
