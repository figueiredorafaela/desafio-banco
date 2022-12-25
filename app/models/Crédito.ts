export default class Credito{
 
    constructor(
        private _valor: number,
        private _data: Date
        ){}
    
    public get valor() : number {
        return this.valor
    }
    
    public set valor(valor : number) {
        this._valor = valor;
    }
    
    public get data() : Date {
        return this._data
    }
    
}