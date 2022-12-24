"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(nome, telefone, cpf, salario) {
        super(nome, telefone, cpf);
        this._cargo = [];
        this._salario = salario;
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
    set Cargos(v) {
        this._cargo = v;
    }
    addCargo(cargo) {
        this._cargo.push(cargo);
    }
    autenticar() {
        return true;
    }
}
exports.default = Funcionario;
