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

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario
    this.usuario.status = 1

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
        alert('Usuário cadastrado com sucesso')
      })
    }
  }

  deletarEndereco(id:number){
    this.enderecoService.deleteEndereco(id).subscribe((resp:Endereco)=>{
      alert('Endereço deletado com sucesso')
    })
  }

}