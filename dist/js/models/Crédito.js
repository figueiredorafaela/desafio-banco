"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Credito {
    constructor(_valor, _data) {
        this._valor = _valor;
        this._data = _data;
    }
    get valor() {
        return this.valor;
    }
    set valor(valor) {
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
}
exports.default = Credito;
