import Cargo from "./Cargo";
import Usuario from "./IUsuario";
import Pessoa from "./Pessoa";

export default class Funcionario extends Pessoa implements Usuario{
    
    private _cargo: Array<Cargo> = new Array<Cargo>()

    constructor(
        nome: string,
        telefone: string, 
        cpf: string, 
        private _salario: number
    )
    {
        super(nome,telefone,cpf)    
    }

    public get salario() : number {
        return this._salario;
    }
    
    public set salario(salario : number) {
        this._salario = salario;
    }

    public get Cargo() : Array<Cargo> {
        return this._cargo
    }

    public addCargo(cargo: Cargo){
        this._cargo.push(cargo)
    }

    autenticar(): boolean {
        return true
    }
    
}