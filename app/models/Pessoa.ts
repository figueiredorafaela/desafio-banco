import prompt from "prompt-sync";

export default abstract class Pessoa{

    constructor(
        private _nome: string, 
        private _telefone: string,
        private _cpf: string
    ){}
        
        public get nome() : string {
            return this._nome
        }
        
        public set nome(nome : string) {
            this._nome = nome;
        }

        public get cpf() : string {
            return this._cpf
        }
        
        public get telefone() : string {
            return this._telefone
        }
        
        public set telefone(v : string) {
            this._telefone = v;
        }
        
        
        
        

}



