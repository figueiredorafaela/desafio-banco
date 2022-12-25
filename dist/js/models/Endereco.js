"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(_cep, _logradouro, _numero, _complemento, _cidade, _uf) {
        this._cep = _cep;
        this._logradouro = _logradouro;
        this._numero = _numero;
        this._complemento = _complemento;
        this._cidade = _cidade;
        this._uf = _uf;
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
