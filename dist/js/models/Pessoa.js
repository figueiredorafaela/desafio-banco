"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, telefone, cpf) {
        this._nome = nome;
        this._telefone = telefone;
        this._cpf = cpf;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(v) {
        this._telefone = v;
    }
}
exports.default = Pessoa;
