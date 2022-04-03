import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    static numContaSalario = 0;

    sacar(valor_){
        const taxa = 1.05;
        return super._sacar(valor_, taxa);
    }

    constructor(agencia_, cliente_, saldoInicial_){
        super(agencia_, cliente_, saldoInicial_, "salario");

        ContaSalario.numContaSalario++;
    }
}