import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static numContaPoupanca = 0;

    sacar(valor_){
        const taxa = 1.02;
        return super._sacar(valor_, taxa);
    }

    constructor(agencia_, cliente_, saldoInicial_){
        super(agencia_, cliente_, saldoInicial_, "poupanca");

        ContaPoupanca.numContaPoupanca++;
    }
}