"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._uf = uf;
        this._numero = numero;
        this._cidade = cidade;
        this._complemento = complemento;
    }
    get cep() {
        return this._cep;
    }
    set cep(cep) {
        this._cep = cep;
    }
    get logradouro() {
        return this._logradouro;
    }
    set logradouro(v) {
        this._logradouro = v;
    }
    get numero() {
        return this._numero;
    }
    set numero(v) {
        this._numero = v;
    }
    get complemento() {
        return this._complemento;
    }
    set complemento(v) {
        this._complemento = v;
    }
    get cidade() {
        return this._cidade;
    }
    set cidade(v) {
        this._cidade = v;
    }
    get uf() {
        return this._uf;
    }
    set uf(v) {
        this._uf = v;
    }
}
exports.Endereco = Endereco;
