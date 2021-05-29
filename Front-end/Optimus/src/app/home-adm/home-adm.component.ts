import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.tipo == "Cliente") {
      this.router.navigate(['/produtoCliente'])
    }

    if(environment.tipo == "") {
      this.router.navigate(['/entrar-adm'])
    }
  }

  logado(){
    console.log(environment.tipo)
    let ok: boolean = false

    if(environment.tipo == "adm"){
      ok=true
    }
    return ok
  }
}
