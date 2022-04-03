import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    static numDiretor = 0;

    _salario = 5000;

    constructor(nome_, cpf_){
        super(nome_, cpf_);
        this._bonificacao = 1.2;

        Diretor.numDiretor++;
    }
}