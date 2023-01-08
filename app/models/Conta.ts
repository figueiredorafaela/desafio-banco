import Credito from "./Crédito";
import Debito from "./Débito";

export default abstract class Conta{
    debito: Debito = new Debito()

   
    constructor(
        private _numero: string, 
        valor: number
        ){
            this.debito.valor = valor
        }
    
    public get numero() : string {
        return this._numero
    }
    
    public depositar(valor: number) : Date {
        const dataDeposito = this.debito.data
        this.debito.valor += valor

        return dataDeposito
    }

    public sacar(valor: number) : Date {
        const dataSaque = this.debito.data

        if(valor <= this.debito.valor)
            this.debito.valor -= valor;
        else console.log("Saldo insuficiente");   
        
        return dataSaque
    }

}

