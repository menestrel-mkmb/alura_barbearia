import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309, 111);
const cliente2 = new Cliente("Alice", 88822233309, 222);

const contaCorrente1 = new ContaCorrente(1001, cliente1);
contaCorrente1.depositar(200);

const contaCorrente2 = new ContaCorrente(1001, cliente2);
contaCorrente2.depositar(100);

console.log(contaCorrente1);
console.log(contaCorrente2);

console.log(contaCorrente1.clienteName + contaCorrente1.saldo);
console.log(contaCorrente2.clienteName + contaCorrente2.saldo);