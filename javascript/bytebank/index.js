import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.rg = 111;
cliente1.cpf = 11122233309;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.saldo = 0;

console.log(cliente1);

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

console.log(cliente2);