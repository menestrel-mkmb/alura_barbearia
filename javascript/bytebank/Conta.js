import { Cliente } from "./Cliente.js";

export class Conta {
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

    get _agencia(){
        return this._agencia;
    }

    get _cliente(){
        return this._cliente;
    }

    get _saldo(){
        return this._saldo;
    }

    /**
     * @param {Cliente} novoTitular
     * novoTitular: Cliente -> .ts
     */
     set cliente(novoTitular){
        if(!(novoTitular instanceof Cliente)) return;

        this._cliente = novoTitular;
        return true;
    }

    clienteName(){
        if(this._cliente == undefined || this._cliente == null) return;
            return this._cliente.nome;
    }

    clienteCpf(){
        if(this._cliente == undefined || this._cliente == null) return;
            return this._cliente.cpf;
    }

    constructor(agencia_, cliente_, saldoInicial_){
        this._saldo = saldoInicial_;
        this._cliente = cliente_;
        this._agencia = agencia_;
    }
}