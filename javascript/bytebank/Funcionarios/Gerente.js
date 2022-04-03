import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    static numGerente = 0;

    _salario = 5000;

    constructor(nome_, cpf_){
        super.constructor(nome_, cpf_, _salario);

        Gerente.numGerente++;
    }
}