import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js"

export class ContaSalario {
    _agencia;
    _cliente;
    _saldo = 0;

    sacar(valor){
        if(!(typeof(valor) == "number") || valor <= 0) return;
        
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        } else {
            return 0;
        }
    }

    depositar(valor){
        if(!(typeof(valor) == "number") || valor <= 0) return;
        
        this._saldo += valor;
        return valor;
    }

    transferir(valor, conta){
        return conta.depositar(this.sacar(valor));
    }

    get agencia(){
        return this._agencia;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(saldoInicial_, cliente_, agencia_){
        this._saldo = saldoInicial_;
        this._cliente = cliente_;
        this._agencia = agencia_;
    }
}