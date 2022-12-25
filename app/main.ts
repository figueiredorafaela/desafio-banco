import Cargo from "./models/Cargo"
import { Cliente } from "./models/Cliente"
import ContaCorrente from "./models/ContaCorrente"
import ContaPoupanca from "./models/ContaPoupanca"
import Debito from "./models/Débito"
import { Endereco } from "./models/Endereco"
import Funcionario  from "./models/Funcionario"
import Pessoa from "./models/Pessoa"


//Aplicação 1
console.log("Aplicação 1")

let funGerente = new Funcionario("Maria Silva", "21 9999-9999","000.000.000-00", 6500)
let funAtendente = new Funcionario("Joao Santos", "21 1111-111","111.111.111-11", 3500)

let cargoGerente = new Cargo("Gerente")
let cargoAtendente = new Cargo("Atendente")

funAtendente.addCargo(cargoAtendente)
funGerente.addCargo(cargoGerente)

//Aplicação 2
console.log("Aplicação 2")

let cliente2 = new Cliente("Rafaela", "990601375","18191170736", true)
let endereco1 = new Endereco("22725430", "Rua cortes", "80", "", "Rio de Janeiro", "RJ")
let endereco2 = new Endereco("22720410", "av mananciais", "72", "casa 3", "Rio de Janeiro", "RJ")

cliente2.addEndereco(endereco1)
cliente2.addEndereco(endereco2)
cliente2.listarEnderecos()

//Aplicação 3
console.log("Aplicação 3")

let cliente3 = new Cliente("José Moreira","21 8888-8888", "888.888.888-88",false)
let contaCorrente3 = new ContaCorrente("3030", 0)

cliente3.addConta(contaCorrente3)

contaCorrente3.depositar(100)
contaCorrente3.depositar(100)
contaCorrente3.depositar(100)

contaCorrente3.sacar(50)

console.log(`Saldo: ${contaCorrente3.calcularSaldo()}`)

//Aplicação 4
console.log("Aplicação 4")

let clienteCorrente4 = new Cliente("Fernanda Couto", "21 2222-2222", "222.222.222-22", false)
let contaCorrente4 = new ContaCorrente("4040", 0)

clienteCorrente4.addConta(contaCorrente4)
contaCorrente4.depositar(1000)

let clientePoupanca4 = new Cliente("Tadeu Afonso", "21 4444-4444", "444.444.444-44", true)
let contaPoupanca4 = new ContaPoupanca("4141", 0.05, 0)

clientePoupanca4.addConta(contaPoupanca4)
contaPoupanca4.depositar(1000)

contaCorrente4.transferir(contaPoupanca4, 500)







