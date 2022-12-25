"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const D_bito_1 = __importDefault(require("./D\u00E9bito"));
class Conta {
    constructor(_numero, valor) {
        this._numero = _numero;
        this.debito = new D_bito_1.default();
        this.debito.valor = valor;
    }
    get numero() {
        return this._numero;
    }
    depositar(valor) {
        this.debito.valor += valor;
    }
    sacar(valor) {
        if (valor <= this.debito.valor)
            this.debito.valor -= valor;
        else
            console.log("Saldo insuficiente");
    }
}
exports.default = Conta;
