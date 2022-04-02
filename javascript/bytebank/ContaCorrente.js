export class ContaCorrente {
    agencia;
    #saldo;

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

    verSaldo(){
        return this.#saldo;
    }
}

