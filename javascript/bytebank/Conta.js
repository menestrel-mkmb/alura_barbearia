import { Cliente } from "./Cliente.js";

export class Conta {
    _agencia;
    _cliente;
    _saldo = 0;
    _tipo;

    _sacar(valor_, taxa_){
        if(!(typeof(valor_) == "number") || valor_ <= 0) return;
        
        if(this._saldo >= valor_*taxa_){
            this._saldo -= valor_*taxa_;
            return valor_;
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

    get _tipo(){
        return this._tipo;
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

    constructor(agencia_, cliente_, saldoInicial_, tipo_){
        if(this.constructor == Conta){
            throw new Error("Instância direta de um objeto de uma Classe Abstrata. Use alguma Classe filha mais específica");
        }

        //TODO: typecast

        this._saldo = saldoInicial_;
        this._cliente = cliente_;
        this._agencia = agencia_;
        this._tipo = tipo_;
    }
}