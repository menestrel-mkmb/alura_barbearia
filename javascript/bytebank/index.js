import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309, 111);
const cliente2 = new Cliente("Alice", 88822233309, 222);

const contaCorrente1 = new ContaCorrente(1001, cliente1, 0);
const contaCorrente2 = new ContaCorrente(1001, cliente2, 0);
const contaPoupanca1 = new ContaPoupanca(1001, cliente1, 0);
//const contaPoupanca2 = new ContaPoupanca(1001, cliente2, 0);