console.log("Trabalhando com loops");

const cidades = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
    );

console.log(cidades);

const idadeComprador = 19, estaAcompanhada = false;
const passagemComprada = true, destino = "São Paulo";
let destinoExiste = false;

for(var index = 0; index < cidades.length; index++){
    if(cidades[index] === destino){
        destinoExiste = true;
        break;
    }
}

((idadeComprador >= 18 || estaAcompanhada) && passagemComprada && destinoExiste) ?
    cidades.splice(index,1) : 
    console.log("Menor de idade, venda não autorizada");

console.log(cidades);