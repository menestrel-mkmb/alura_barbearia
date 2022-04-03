export class Cliente {
    static numClientes = 0;

    _nome;
    _cpf;
    _rg;
    _senha;

    get _cpf(){
        return this._cpf;
    }

    get _rg(){
        return this._rg;
    }

    autenticar(senha_){
        return this._senha == senha_;
    }

    setSenha(valor_){
        this._senha = valor_;
    }

    constructor(nome_, cpf_, rg_){
        this._nome = nome_;
        this._cpf = cpf_;
        this._rg = rg_;

        Cliente.numClientes++;
    }
}