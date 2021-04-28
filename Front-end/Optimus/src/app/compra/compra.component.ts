import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Endereco } from '../model/Endereco';
import { Usuario } from '../model/Usuario';
import { EnderecoService } from '../service/endereco.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  usuario: Usuario = new Usuario()
  endereco: Endereco = new Endereco();
  listaEnderecos: Endereco[]
  idUser:number;

  rua: string;
  numero: string;
  bairro: string;

  constructor(
    private enderecoService: EnderecoService,
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(environment.tipo == "") {
      alert('Por favor fazer o login antes de compara!')
      this.router.navigate(['/entrar'])
    }
    this.idUser = environment.id
    console.log(this.idUser)
    this.findAllEnderecos()
    this.UsuarioPeloId()
  }

  UsuarioPeloId(){
    this.usuarioService.getById(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.rua = this.usuario.rua
      this.numero = this.usuario.numero
      this.bairro = this.usuario.bairro
    })
  }

  findAllEnderecos() {
    this.enderecoService.findAll().subscribe((resp: Endereco[]) => {
      this.listaEnderecos = resp
    })
  }

  selecionarEndereco(id: number){
    this.enderecoService.findById(id).subscribe((resp: Endereco) => {
      this.endereco = resp
      this.rua = this.endereco.rua
      this.numero = this.endereco.numero
      this.bairro = this.endereco.bairro
    })
  }

  selecEndereco(){
    this.rua = this.usuario.rua
    this.numero = this.usuario.numero
    this.bairro = this.usuario.bairro
  }

  enderecoAdicional(cliente: number){
    let ok: boolean = false
    if(cliente == this.idUser ){
      ok = true
    }
    return ok
  }


}
