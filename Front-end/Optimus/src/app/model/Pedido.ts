import { Usuario } from "./Usuario";
import { Itens } from "./Itens"

export class Pedido{
    public id: number
    public usuario: Usuario
    public date: Date
    public status: string
    public valor: number
    public rua: string ;
    public numero: string;
    public bairro: string;
    public cep: string;
    public cidade: string;
    public itens: Itens[]
  }
