export class Conta {
    _agencia;
    _cliente;

    get agencia(){
        return this._agencia;
    }

    get cliente(){
        return this._cliente;
    }

    constructor(agencia_, cliente_){
        this._agencia = agencia_;
        this._cliente = cliente_;
    }
}