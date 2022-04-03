export class Cliente {
    static numClientes = 0;

    nome;
    _cpf;
    _rg;

    get _cpf(){
        return this._cpf;
    }

    get _rg(){
        return this._rg;
    }

    constructor(nome_, cpf_, rg_){
        this.nome = nome_;
        this._cpf = cpf_;
        this._rg = rg_;

        Cliente.numClientes++;
    }
}