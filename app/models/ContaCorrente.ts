import Conta from "./Conta";
import Debito from "./Débito";

export default class ContaCorrente extends Conta{
    private _limite: number

    constructor(numero: string, limite: number){
        super(numero)
        this._limite = limite
    }
    
    public get limite() : number {
        return this._limite
    }

    public set limite(limite : number) {
        this._limite = limite;
    }
    
    public transferir(contaDestino : Conta, valor: number){
        this.sacar(valor)
        contaDestino.depositar(valor)   
    }
}