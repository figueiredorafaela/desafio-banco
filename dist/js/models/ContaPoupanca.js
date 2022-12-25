"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaPoupanca extends Conta_1.default {
    constructor(numero, rentabilidade, valor) {
        super(numero, valor);
        ContaPoupanca._rentabilidadeMensal = rentabilidade;
    }
    get rentabilidadeMensal() {
        return ContaPoupanca._rentabilidadeMensal;
    }
    set rentabilidadeMensal(v) {
        ContaPoupanca._rentabilidadeMensal = v;
    }
    calcularRendimento() {
        ContaPoupanca._rentabilidadeMensal *= this.debito.valor;
    }
    calcularSaldo() {
        return this.debito.valor;
    }
}
exports.default = ContaPoupanca;
