export default class Credito{
    private _valor: number
    private _data: Date

    constructor(valor: number,data: Date){
        this._valor = valor
        this._data = data
    }
    
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