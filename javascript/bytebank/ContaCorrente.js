import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    #taxaDeposito = 6;
    #taxaSaque = 4;
    #taxaTransferencia = 10;

    depositar(valor){
        if(!(typeof(valor) == "number") || valor <= this.taxaDeposito) return;
        
        this._saldo += valor;
        return valor;   
    }

    constructor(agencia_, cliente_, saldoInicial_){
        super(agencia_, cliente_, saldoInicial_, "corrente");
    }
}

