import Conta from "./Conta";
import Debito from "./Débito";

export default class ContaCorrente extends Conta{
    
    constructor(
        numero: string,
        private _limite: number
    ){
        super(numero,_limite)
    }
    
    public get limite() : number {
        return this._limite
    }

    public set limite(limite : number) {
        this._limite = limite;
    }
    
    public transferir(contaDestino: Conta, valor: number){
        if(valor <= this.debito.valor){
            this.sacar(valor)
            contaDestino.depositar(valor)
        }
        else console.log("Saldo insuficiente")
           
    }

    public calcularSaldo(){
        return this.debito.valor
    }
}