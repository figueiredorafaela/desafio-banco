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
    
    public depositar(valor: number) : void {
         this.debito.valor += valor
    }

    public sacar(valor: number) : void {
        if(valor <= this.debito.valor)
            this.debito.valor -= valor;
        else
        throw new Error("Saldo insuficiente");                
    }

}

