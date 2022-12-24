import { Endereco } from "./Endereco";
import Usuario from "./IUsuario";
import Pessoa from "./Pessoa";

export class Cliente extends Pessoa implements Usuario{
   private _vip: boolean 
   private _endereco: Array<Endereco> = []

    
    constructor(nome: string,telefone: string, cpf: string, vip: boolean){
        super(nome, telefone, cpf)
        this._vip = vip
    }

    public get Endereco() : Array<Endereco> {
        return this._endereco
    }
    
    public set Enderecos(v : Array<Endereco>) {
        this._endereco = v;
    }

    public addEndereco(endereco: Endereco){
        this._endereco.push(endereco)
    }

    lista(): Array<Endereco>{
        return this._endereco
    }
    
    public listarEnderecos()   {
        this.lista().forEach(n => {
            console.log("Endereço:")
            console.log(`CEP: ${n.cep}`)
            console.log(`Logradouro: ${n.logradouro}`)
            console.log(`Número: ${n.numero}`)
            console.log(`Complemento: ${n.complemento}`)
            console.log(`Cidade: ${n.cidade}`)
            console.log(`UF: ${n.uf}`)
            console.log("")
        })
    }
    
    autenticar(): boolean {
        return true
    }
}

