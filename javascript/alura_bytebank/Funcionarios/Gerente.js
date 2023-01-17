import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    static numGerente = 0;

    _salario = 4000;

    constructor(nome_, cpf_){
        super(nome_, cpf_);
        this._bonificacao = 1.1;

        Gerente.numGerente++;
    }
}