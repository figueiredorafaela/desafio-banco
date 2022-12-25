export default class Cargo{

    constructor(private _nome: string){}    

    
    public get nome() : string {
        return this._nome
    }
    
    public set nome(v : string) {
        this._nome = v;
    }
    
}