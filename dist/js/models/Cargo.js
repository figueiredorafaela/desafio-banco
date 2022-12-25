"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cargo {
    constructor(_nome) {
        this._nome = _nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(v) {
        this._nome = v;
    }
}
exports.default = Cargo;
