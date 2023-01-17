import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numContaCorrente = 0;

    sacar(valor_){
        const taxa = 1.1;
        return super._sacar(valor_, taxa);
    }

    depositar(valor){
        if(!(typeof(valor) == "number") || valor <= this.taxaDeposito) return;
        
        this._saldo += valor;
        return valor;   
    }

    constructor(agencia_, cliente_, saldoInicial_){
        super(agencia_, cliente_, saldoInicial_, "corrente");

        ContaCorrente.numContaCorrente++;
    }
}

