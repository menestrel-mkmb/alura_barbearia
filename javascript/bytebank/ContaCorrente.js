import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    #saldo = 0;
    cliente;

    sacar(valor){
        if(!(typeof(valor) == "number") || valor <= 0) return;
        
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return valor;
        } else {
            return 0;
        }
    }

    depositar(valor){
        if(!(typeof(valor) == "number") || valor <= 0) return;
        
        this.#saldo += valor;
        return valor;
    }

    transferir(valor, conta){
        return conta.depositar(this.sacar(valor));
    }

    verSaldo(){
        return this.#saldo;
    }

    definirTitularidade(novoTitular){
        this.cliente = novoTitular;
        return true;
    }
}

