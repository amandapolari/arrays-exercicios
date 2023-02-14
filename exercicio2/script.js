// EXERCÍCIO 2

const listaDeNumeros = [1990, 1995, 27, 31, 2018];
const listaDePalavras = ['Amanda', 'Luan', 'Julia', 'Eternidade'];
const listaDiversificada = [7, 15, 'Amor', 'Superação', true, false];

// a)
// Salvando em variáveis a quantidade de itens das arrays:
const quantidadeItensListaDeNumeros = listaDeNumeros.length;
const quantidadeItensListaDePalavras = listaDePalavras.length;
const quantidadeItensListaDiversificada = listaDiversificada.length;

// Imprimindo todas as arrays no console:
console.log(`
Quantidade de itens da listaDeNumeros : quantidadeItensListaDeNumeros
Quantidade de itens da listaDePalavras : quantidadeItensListaDePalavras
Quantidade de itens da listaDiversificada : quantidadeItensListaDiversificada
`)

// b) Imprimindo itens pedidos no console:
console.log(`
Primeiro item do primeiro array: ${listaDeNumeros[0]};
Segundo item do segundo array: ${listaDePalavras[1]};
Terceiro item do terceiro array: ${listaDiversificada[1]};
`)

// c) Verificando elementos inclusos:
const numeroIncluidoNaListaDeNumeros = listaDeNumeros.includes(1995);
const palavraIncluidaNaListaDePalavras = listaDePalavras.includes('Chocolate');

console.log(`
A primeira verificação retorna: ${numeroIncluidoNaListaDeNumeros};
A segunda verificação retorna: ${palavraIncluidaNaListaDePalavras};
`)