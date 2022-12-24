import Cargo from "./models/Cargo"
import { Cliente } from "./models/Cliente"
import ContaCorrente from "./models/ContaCorrente"
import Debito from "./models/Débito"
import { Endereco } from "./models/Endereco"
import Funcionario  from "./models/Funcionario"
import Pessoa from "./models/Pessoa"


let cliente = new Cliente("Rafaela", "990601375","18191170736", true)
let endereco1 = new Endereco("22725430", "Rua cortes", "80", "", "Rio de Janeiro", "RJ")
let endereco2 = new Endereco("22720410", "av mananciais", "72", "casa 3", "Rio de Janeiro", "RJ")
console.log(endereco1)
console.log(endereco2)
cliente.addEndereco(endereco1)
cliente.addEndereco(endereco2)
cliente.listarEnderecos()

let funcionario = new Funcionario("Rozelia","994590034", "00881137790",1500)
let cargo = new Cargo("Caixa")
funcionario.addCargo(cargo)










