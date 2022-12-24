"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Debito {
    constructor(valor, data) {
        this._valor = valor;
        this._data = data;
    }
    get valor() {
        return this._valor;
    }
    set valor(v) {
        this._valor = v;
    }
    get data() {
        return this._data;
    }
}
exports.default = Debito;
