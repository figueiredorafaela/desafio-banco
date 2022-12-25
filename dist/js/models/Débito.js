"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Debito {
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
