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
  listaUsuario: Usuario[];

  nome: string;
  sobrenome: string;
  rg: string;
  cpf: any;
  telefone: string;
  email: string;
  numCPF: number;

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
    this.listaCliente();
  }

  listaCliente () {
    this.usuarioService.getAll().subscribe((resp: Usuario[])=>{
      this.listaUsuario = resp;
    })
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value;
  }

  validaNome() {
    if (this.nome.length < 3) {
      this.nomeOk = false;
      this.alertaNome = 'nome inválido';
    } else {
      this.nomeOk = true;
      this.alertaNome = '';
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
  }

  cpfExistente(cpf:any) {
    for (let usuario of this.listaUsuario){
      if (usuario.cpf == this.usuario.cpf) {
        alert('Usuário já existe')
        this.router.navigate(['/entrar'])
        this.cpfOk = false;

      } 
    }

  }


  cadastrar() {
    this.cpfExistente(this.cpf)
    if(this.cpfOk == true){

    
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

}
