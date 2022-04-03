import { Cliente } from "./Conta/Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309, 111);
const cliente2 = new Cliente("Alice", 88822233309, 222);

const contaCorrente1 = new ContaCorrente(1001, cliente1, 50);
const contaCorrente2 = new ContaCorrente(1001, cliente2, 50);
const contaPoupanca1 = new ContaPoupanca(1001, cliente1, 50);

console.log(contaCorrente1.sacar(10));
console.log(contaCorrente2.transferir(20, contaPoupanca1));
console.log(contaPoupanca1.depositar(10));

console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(contaPoupanca1);

