import { Usuario } from "./Usuario";
import { Itens } from "./Itens"

export class Pedido{
    public id: number
    public usuario: Usuario
    public data: Date
    public status: string
    public valor: number
    public rua: string ;
    public numero: string;
    public bairro: string;
    public cep: string;
    public cidade: string;
    public frete: number;
    public tipoPagamento: string;
    public itens: Itens[]
  }
