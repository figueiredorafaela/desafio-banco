"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Debito {
    constructor() {
        this._data = new Date();
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
