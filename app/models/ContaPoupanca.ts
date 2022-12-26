import Conta from "./Conta";

export default class ContaPoupanca extends Conta{
    private static _rentabilidadeMensal: number

    constructor(numero: string, rentabilidade: number, valor: number){
        super(numero,valor)
        ContaPoupanca._rentabilidadeMensal = rentabilidade
    }

    public get rentabilidadeMensal() : number {
        return ContaPoupanca._rentabilidadeMensal
    }
    
    public set rentabilidadeMensal(v : number) {
        ContaPoupanca._rentabilidadeMensal = v;
    }
    
    public calcularRendimento() : number{
        return ContaPoupanca._rentabilidadeMensal *= this.debito.valor
    }

    public calcularSaldo() : number{
        return this.debito.valor + this.calcularRendimento()
    }
}