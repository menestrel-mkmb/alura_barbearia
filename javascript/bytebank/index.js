import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.rg = 111;
cliente1.cpf = 11122233309;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.depositar(200);
contaCorrente1.definirTitularidade(cliente1);

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 1001;
contaCorrente2.depositar(100);
contaCorrente2.definirTitularidade(cliente2);

console.log(contaCorrente1.verSaldo());
console.log(contaCorrente2.verSaldo());

contaCorrente1.transferir(50, contaCorrente2);

console.log(contaCorrente1.verSaldo());
console.log(contaCorrente2.verSaldo());