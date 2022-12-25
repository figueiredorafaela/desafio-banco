export class Endereco{

    constructor(
        private _cep:string,
        private _logradouro:string,
        private _numero:string,
        private _complemento:string,
        private _cidade:string,
        private _uf:string
    ){}

    public get cep(): string {
        return this._cep;
    }

    public set cep(cep: string) {
        this._cep = cep;
    }
    
    public get logradouro() : string {
        return this._logradouro
    }
    
    public set logradouro(v : string) {
        this._logradouro = v;
    }
    
    public get numero() : string {
        return this._numero
    }
    
    public set numero(v : string) {
        this._numero = v;
    }
       
    public get complemento() : string {
        return this._complemento
    }
    
    public set complemento(v : string) {
        this._complemento = v;
    }
    
    public get cidade() : string {
        return this._cidade
    }
    
    public set cidade(v : string) {
        this._cidade = v;
    }
    
    public get uf() : string {
        return this._uf
    }
    
    public set uf(v : string) {
        this._uf = v;
    }
    
}