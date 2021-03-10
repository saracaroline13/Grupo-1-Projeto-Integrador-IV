import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pesquisa: string

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    this.router.navigate(['pesquisa', this.pesquisa])
  }

}
