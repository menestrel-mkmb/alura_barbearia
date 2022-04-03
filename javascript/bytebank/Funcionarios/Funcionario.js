export class Funcionario {
    static numFuncionario = 0;

    _nome;
    _cpf;
    _salario;

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

    constructor(nome_, cpf_, salario_){
        if(this.constructor == Funcionario){
            throw new Error("Instância direta de um objeto de uma Classe Abstrata. Use alguma Classe filha mais específica");
        }

        this._nome = nome_;
        this._cpf = cpf_;
        this._salario = salario_;

        Funcionario.numFuncionario++;
    }
}