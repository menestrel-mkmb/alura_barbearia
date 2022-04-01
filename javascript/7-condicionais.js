console.log("Trabalhando com condicionais");

const cidades = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
    );

console.log(cidades);
const idadeComprador = 19, estaAcompanhada = false, passagemComprada = true;

((idadeComprador >= 18) || (estaAcompanhada) && passagemComprada) ?
    cidades.splice(1,1) : 
    console.log("Menor de idade, venda não autorizada");

console.log(cidades);