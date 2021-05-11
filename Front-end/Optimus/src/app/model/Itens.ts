import { Produto } from "./Produto"
import { Pedido } from "./Pedido"

export class Itens{
    public id: number
    public pedido: Pedido
    public produto: Produto
    public quantidade: number
  }