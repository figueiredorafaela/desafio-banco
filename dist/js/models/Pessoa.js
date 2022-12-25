"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(_nome, _telefone, _cpf) {
        this._nome = _nome;
        this._telefone = _telefone;
        this._cpf = _cpf;
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
