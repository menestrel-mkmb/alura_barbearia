import { Funcionario } from "./Funcionarios/Funcionario.js";

export class SistemaAutenticacao {
    static login(userlogin_, senha_){
        if(SistemaAutenticacao.hasLoginInterface(userlogin_)){
            return userlogin_.autenticar(senha_)
        }
        return false;
    }

    static hasLoginInterface(username_){
        return "autenticar" in username_ && username_.autenticar instanceof Function;
    }
}