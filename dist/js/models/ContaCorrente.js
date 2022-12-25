"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaCorrente extends Conta_1.default {
    constructor(numero, _limite) {
        super(numero, _limite);
        this._limite = _limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(limite) {
        this._limite = limite;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    calcularSaldo() {
        return this.debito.valor;
    }
}
exports.default = ContaCorrente;
