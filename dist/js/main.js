"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cargo_1 = __importDefault(require("./models/Cargo"));
const Cliente_1 = require("./models/Cliente");
const ContaCorrente_1 = __importDefault(require("./models/ContaCorrente"));
const ContaPoupanca_1 = __importDefault(require("./models/ContaPoupanca"));
const Endereco_1 = require("./models/Endereco");
const Funcionario_1 = __importDefault(require("./models/Funcionario"));
//Aplicação 1
console.log("============== Início da aplicação 1 ==============\n");
let funGerente = new Funcionario_1.default("Maria Silva", "21 9999-9999", "000.000.000-00", 6500);
let funAtendente = new Funcionario_1.default("Joao Santos", "21 1111-111", "111.111.111-11", 3500);
let cargoGerente = new Cargo_1.default("Gerente");
let cargoAtendente = new Cargo_1.default("Atendente");
funAtendente.addCargo(cargoAtendente);
funGerente.addCargo(cargoGerente);
console.log(funAtendente);
console.log(funGerente);
console.log("\n============== Fim da aplicação 1 ==============\n");
//Aplicação 2
console.log("============= Início da aplicação 2 =============\n");
let cliente2 = new Cliente_1.Cliente("Rafaela", "990601375", "18191170736", true);
let endereco1 = new Endereco_1.Endereco("22725430", "Rua cortes", "80", "", "Rio de Janeiro", "RJ");
let endereco2 = new Endereco_1.Endereco("22720410", "av mananciais", "72", "casa 3", "Rio de Janeiro", "RJ");
cliente2.addEndereco(endereco1);
cliente2.addEndereco(endereco2);
cliente2.listarEnderecos();
console.log("============== Fim da aplicação 2 ==============\n");
//Aplicação 3
console.log("============= Início da aplicação 3 =============\n");
let cliente3 = new Cliente_1.Cliente("José Moreira", "21 8888-8888", "888.888.888-88", false);
let contaCorrente3 = new ContaCorrente_1.default("3030", 0);
cliente3.addConta(contaCorrente3);
contaCorrente3.depositar(100);
contaCorrente3.depositar(100);
contaCorrente3.depositar(100);
contaCorrente3.sacar(50);
console.log(`Saldo em conta corrente ${contaCorrente3.numero}: ${contaCorrente3.calcularSaldo()}`);
console.log("\n============== Fim da aplicação 3 ==============\n");
//Aplicação 4
console.log("============= Início da aplicação 4 =============\n");
let clienteCorrente4 = new Cliente_1.Cliente("Fernanda Couto", "21 2222-2222", "222.222.222-22", false);
let contaCorrente4 = new ContaCorrente_1.default("4040", 0);
clienteCorrente4.addConta(contaCorrente4);
contaCorrente4.depositar(1000);
let clientePoupanca4 = new Cliente_1.Cliente("Tadeu Afonso", "21 4444-4444", "444.444.444-44", true);
let contaPoupanca4 = new ContaPoupanca_1.default("4141", 0.05, 0);
clientePoupanca4.addConta(contaPoupanca4);
contaPoupanca4.depositar(1000);
contaCorrente4.transferir(contaPoupanca4, 500);
console.log(`Saldo em conta corrente ${contaCorrente4.numero}: ${contaCorrente4.calcularSaldo()}`);
console.log(`Saldo em conta poupança ${contaPoupanca4.numero}: ${contaPoupanca4.calcularSaldo()}`);
console.log("\n============== Fim da aplicação 4 ==============\n");
//Aplicação 5
console.log("============= Início da aplicação 5 =============\n");
let clientePoupanca5 = new Cliente_1.Cliente("Josue Matias", "21 6666-6666", "666.666.666-66", false);
let contaPoupanca5 = new ContaPoupanca_1.default("5050", 0.01, 0);
let dataInicio = new Date();
dataInicio.setDate(1);
dataInicio.setMonth(1);
dataInicio.setFullYear(2022);
let dataFinal = new Date();
dataFinal.setDate(31);
dataFinal.setMonth(11);
dataFinal.setFullYear(2022);
while (dataFinal.getMonth() >= dataInicio.getMonth()) {
    contaPoupanca5.depositar(200);
    dataFinal.setMonth(dataFinal.getMonth() - 1);
}
console.log(`Saldo da conta poupança ${contaPoupanca5.numero}: ${contaPoupanca5.calcularSaldo()}`);
console.log("\n============== Fim da aplicação 5 ==============");
