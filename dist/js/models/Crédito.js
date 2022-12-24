"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Credito {
    constructor(valor, data) {
        this._valor = valor;
        this._data = data;
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
