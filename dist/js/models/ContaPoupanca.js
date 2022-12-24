"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaPoupanca extends Conta_1.default {
    constructor(numero, rentabilidade) {
        super(numero);
        ContaPoupanca._rentabilidadeMensal = rentabilidade;
    }
    get rentabilidadeMensal() {
        return ContaPoupanca._rentabilidadeMensal;
    }
    set rentabilidadeMensal(v) {
        ContaPoupanca._rentabilidadeMensal = v;
    }
    calcularRendimento() {
        this.debito.valor * 0.05; // ao mes
    }
}
exports.default = ContaPoupanca;
