// Exercício 3:
const listaDeNumeros = [1990, 1995, 27, 31, 2018];
const listaDePalavras = ['Amanda', 'Luan', 'Julia', 'Eternidade'];
const listaDiversificada = [7, 15, 'Amor', 'Superação', true, false];

const listaDeNumerosCopia = listaDeNumeros.slice();
const listaDePalavrasCopia = listaDePalavras.slice();
const listaDiversificadaCopia = listaDiversificada.slice();

// a) Inserindo um novo elemento no início da array e mostrando no console:
listaDeNumerosCopia.unshift(3);
console.log(`
ORIGINAL: Array listaDeNumeros: ${listaDeNumeros};
CÓPIA: Array listaDeNumerosCopia: ${listaDeNumerosCopia};
`)

// b) Removendo o ultimo item da segunda array
listaDePalavrasCopia.pop();
console.log(`
ORIGINAL: Array listaDePalavras: ${listaDePalavras};
CÓPIA: Array listaDePalavrasCopia: ${listaDePalavrasCopia};
`)

// c) Removendo o segundo elemento da terceita array
listaDiversificadaCopia.splice(1,1);
console.log(`
ORIGINAL: Array listaDiversificada: ${listaDiversificada};
CÓPIA: Array listaDiversificadaCopia: ${listaDiversificadaCopia};
`)