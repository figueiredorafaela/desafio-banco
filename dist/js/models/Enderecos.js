"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enderecos = void 0;
class Enderecos {
    constructor() {
        this.enderecos = [];
    }
    adiciona(endereco) {
        this.enderecos.push(endereco);
    }
    lista() {
        return this.enderecos;
    }
}
exports.Enderecos = Enderecos;
