export class Funcionario {
    static numFuncionario = 0;

    _nome;
    _cpf;
    _salario;
    _bonificacao = 1;
    _senha;

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    get salario(){
        return this._salario;
    }

    set salario(valor){
        return _salario = valor;
    }

    get senha(){
        return this._senha;
    }

    /**
     * @param {string} valor
     * valor: string -> ts
     */
    setSenha(valor){
        this._senha = valor;
    }

    constructor(nome_, cpf_){
        if(this.constructor == Funcionario){
            throw new Error("Instância direta de um objeto de uma Classe Abstrata. Use alguma Classe filha mais específica");
        }

        this._nome = nome_;
        this._cpf = cpf_;

        Funcionario.numFuncionario++;
    }
}