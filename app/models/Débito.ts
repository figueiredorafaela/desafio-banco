export default class Debito{
  
    private _valor: number
    private _data: Date = new Date()
        
    public get valor(){
        return this._valor
    }

    public set valor(v : number) {
        this._valor = v;
    }

    public set data(v : Date) {
        this.data = v;
    }
    
    public get data(){
        return this._data
    }
    
}