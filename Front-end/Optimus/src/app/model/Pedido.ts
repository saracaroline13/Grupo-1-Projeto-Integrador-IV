import { Usuario } from "./Usuario";
import { Itens } from "./Itens"

export class Pedido{
    public id: number
    public usuario: Usuario
    public date: Date
    public status: string
    public valor: number
    public itens: Itens[]
  }