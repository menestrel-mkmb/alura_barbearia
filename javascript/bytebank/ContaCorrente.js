import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    agencia;
    #saldo = 0;
    #cliente;

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

    get saldo(){
        return this.#saldo;
    }

    set cliente(novoTitular){
        if(!(novoTitular instanceof Cliente)) return;

        this.#cliente = novoTitular;
        return true;
    }

    get cliente(){
        return this.#cliente;
    }

    get clienteName(){
        if(this.#cliente == undefined || this.#cliente == null) return;
            return this.#cliente.nome;
    }

    get clienteCpf(){
        if(this.#cliente == undefined || this.#cliente == null) return;
            return this.#cliente.cpf;
    }

    constructor(agencia_, cliente_){
        this.agencia = agencia_;
        this.#cliente = cliente_;

        numeroDeContas++;
    }
}

