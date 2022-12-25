"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Cliente extends Pessoa_1.default {
    constructor(nome, telefone, cpf, vip) {
        super(nome, telefone, cpf);
        this._endereco = [];
        this._conta = [];
        this._vip = vip;
    }
    get Endereco() {
        return this._endereco;
    }
    set Enderecos(v) {
        this._endereco = v;
    }
    addEndereco(endereco) {
        this._endereco.push(endereco);
    }
    lista() {
        return this._endereco;
    }
    listarEnderecos() {
        this.lista().forEach(n => {
            console.log("Endereço:");
            console.log(`CEP: ${n.cep}`);
            console.log(`Logradouro: ${n.logradouro}`);
            console.log(`Número: ${n.numero}`);
            console.log(`Complemento: ${n.complemento}`);
            console.log(`Cidade: ${n.cidade}`);
            console.log(`UF: ${n.uf}`);
            console.log("");
        });
    }
    get Conta() {
        return this._conta;
    }
    set Conta(v) {
        this._conta = v;
    }
    addConta(Conta) {
        this._conta.push(Conta);
    }
    autenticar() {
        return true;
    }
}
exports.Cliente = Cliente;
