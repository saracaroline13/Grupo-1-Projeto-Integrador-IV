import { Pedido } from "./Pedido"

export class Usuario{
  public id_usuario: number
  public nome: string
  public sobrenome: string
  public cpf: string
  public telefone: string
  public rg: string
  public email: string
  public senha: string
  public tipo: string
  public cargo: string
  public salario: number
  public rua: string
  public numero: string
  public bairro: string
  public cep: string
  public estado: string
  public cidade: string
  public datanasc: string
  public emailPessoal: string
  public status: number
  public pedidos: Pedido[]
}
