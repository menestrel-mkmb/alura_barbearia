import { Funcionario } from "./Funcionarios/Funcionario.js";

export class SistemaAutenticacao {
    static login(funcionario_, senha_){
        return funcionario_.senha == senha_;
    }
}