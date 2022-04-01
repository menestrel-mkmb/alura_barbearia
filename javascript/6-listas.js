console.log("Trabalhando com listas");

const cidades = new Array(
                        'Salvador',
                        'São Paulo',
                        'Rio de Janeiro'
                        );

console.log("Cidades Destinos: ");
console.log(cidades);

cidades.push('Curitiba');
console.log(cidades);

cidades.splice(2,1); //rj--;
console.log(cidades, cidades[2]);