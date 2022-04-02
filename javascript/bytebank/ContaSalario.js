import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(agencia_, cliente_, saldoInicial_){
        super(agencia_, cliente_, saldoInicial_, "salario");
    }
}