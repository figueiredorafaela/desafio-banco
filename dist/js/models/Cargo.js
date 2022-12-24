"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cargo {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(v) {
        this._nome = v;
    }
}
exports.default = Cargo;
