"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(numero) {
        this._cliente = [];
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    get Cliente() {
        return this._cliente;
    }
    set Cliente(v) {
        this._cliente = v;
    }
    addCliente(cliente) {
        this._cliente.push(cliente);
    }
    depositar(valor) {
        this.debito.valor += valor;
    }
    sacar(valor) {
        if (valor <= this.debito.valor)
            this.debito.valor -= valor;
        else
            throw new Error('Saldo insuficiente');
    }
}
exports.default = Conta;
