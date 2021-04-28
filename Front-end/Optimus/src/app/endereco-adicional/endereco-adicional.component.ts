import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../model/Endereco';
import { Usuario } from '../model/Usuario';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-endereco-adicional',
  templateUrl: './endereco-adicional.component.html',
  styleUrls: ['./endereco-adicional.component.css']
})
export class EnderecoAdicionalComponent implements OnInit {
  usuario: Usuario = new Usuario();
  estadoUsuario: string
  endereco: Endereco = new Endereco();
  idUser: number;

  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;

  ruaOk: boolean = false;
  numeroOk: boolean = false;
  bairroOk: boolean = false;
  cepOk: boolean = false;
  cidadeOk: boolean = false;


  listaCamposInvalidos: any = []
  alertaRua: string;
  alertaNumero: string;
  alertaBairro: string;
  alertaCep: string;
  alertaCidade: string;



  constructor(
    private router: ActivatedRoute,
    private enderecoService: EnderecoService,
    private route: Router
  ) { }

  ngOnInit() {
    this.idUser = this.router.snapshot.params['id']
  }

  validaCep() {
    if (this.cep.length < 8 || this.cep.length > 8) {
      this.cepOk = false;
      this.alertaCep = 'cep inválido';
    } else {
      this.alertaCep = '';
      this.pesquisarCep(this.cep);
    }
  }

  pesquisarCep(cep: string){
    this.enderecoService.endereco(cep).subscribe((resp: any) => {
      if(resp == ""){
        alert('CEP não encontrado!')
      } else {
        this.rua = resp.logradouro
        this.endereco.rua = this.rua
        this.cidade = resp.localidade
        this.endereco.cidade = this.cidade
        this.estadoUsuario = resp.uf
        this.endereco.estado = this.estadoUsuario
        this.bairro = resp.bairro
        this.endereco.bairro = this.bairro
        this.cepOk = true;
        this.ruaOk = true;
        this.bairroOk = true;
        this.cidadeOk = true;
      }
    })
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

  validar() {
    if (
      this.ruaOk == true &&
      this.numeroOk == true &&
      this.bairroOk == true &&
      this.cepOk == true &&
      this.cidadeOk == true
      
    ) {
      this.cadastrar()
    } else {
      alert('Campos inválidos por favor conferir todos!')
    }
  }

  cadastrar() {
    this.endereco.estado = this.estadoUsuario;
    this.endereco.id_cliente = this.idUser;
    this.enderecoService.postEndereco(this.endereco).subscribe((resp: Endereco) => {
      alert('Endereço adicional cadastrado com sucesso')
      this.route.navigate(['/alterar-usuario', this.idUser])
    })
  }
}