"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(nome, telefone, cpf, _salario) {
        super(nome, telefone, cpf);
        this._salario = _salario;
        this._cargo = new Array();
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    get Cargo() {
        return this._cargo;
    }
    addCargo(cargo) {
        this._cargo.push(cargo);
    }
    autenticar() {
        return true;
    }
}
exports.default = Funcionario;
