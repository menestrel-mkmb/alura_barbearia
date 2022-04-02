export class Cliente {
    _cpf;
    _rg;

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    constructor(nome_, cpf_, rg_){
        this.nome = nome_;
        this._cpf = cpf_;
        this._rg = rg_;
    }
}