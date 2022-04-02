export class Cliente {
    nome;
    #cpf;
    #rg;

    get cpf(){
        return this.#cpf;
    }

    get rg(){
        return this.#rg;
    }

    constructor(nome_, cpf_, rg_){
        this.nome = nome_;
        this.#cpf = cpf_;
        this.#rg = rg_;
    }
}