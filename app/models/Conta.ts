import { Cliente } from "./Cliente";
import Credito from "./Crédito";
import Debito from "./Débito";

export default abstract class Conta{
   
    private _numero: string
    private _cliente: Array<Cliente> = []

    debito : Debito
    credito: Credito

    
    constructor(numero: string){
        this._numero = numero
        
    }
    
    public get numero() : string {
        return this._numero
    }

    public get Cliente() : Array<Cliente> {
        return this._cliente
    }
    
    public set Cliente (v : Array<Cliente>) {
        this._cliente = v;
    }

    public addCliente(cliente: Cliente){
        this._cliente.push(cliente)
    }
    
    public depositar(valor: number): void {
         this.debito.valor += valor;
    }

    public sacar(valor: number): void {
        if(valor <= this.debito.valor)
            this.debito.valor -= valor;
        else
        throw new Error('Saldo insuficiente')
                
    }

}

