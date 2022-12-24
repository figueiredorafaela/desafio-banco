export default class Debito{
    private _valor: number
    private _data: Date

    constructor(valor: number, data: Date){
        this._valor = valor
        this._data = data
    }

    public get valor(){
        return this._valor
    }

    public set valor(v : number) {
        this._valor = v;
    }
    
    
    public get data(){
        return this._data
    }
    
}