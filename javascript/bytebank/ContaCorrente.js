import { Cliente } from "./Cliente.js";
//import { Conta } from "./Conta.js";

export class ContaCorrente {
    conta;
    cliente = new Cliente();
    saldo = 0;

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

    extrato(){
        return this._saldo;
    }

    get conta(){
        return this._conta;
    }

    get saldo(){
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

    get cliente(){
        return this._cliente;
    }

    get clienteName(){
        if(this._cliente == undefined || this._cliente == null) return;
            return this._cliente.nome;
    }

    get clienteCpf(){
        if(this._cliente == undefined || this._cliente == null) return;
            return this._cliente.cpf;
    }

    constructor(conta_, cliente_, saldo_){
        this._conta = conta_;
        this._cliente = cliente_;
        this._saldo = saldo_;
    }
}

