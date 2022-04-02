import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia_, cliente_, saldoInicial_){
        super(agencia_, cliente_, saldoInicial_, "poupanca");
    }
}