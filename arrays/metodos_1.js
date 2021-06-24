const numeros = [1, 2, 3, 4, 5, 8];

numeros[0] = 100;
numeros.push(6);

console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4));
console.log(numeros.includes(10));
console.log(numeros.includes(6));
console.log(numeros.join(' - '));
console.log(numeros);

const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2);

/* O método indexOf() 
retorna o primeiro índice em que o elemento pode ser encontrado no array, 
retorna -1 caso o mesmo não esteja presente.

O método push() 
adiciona um ou mais elementos ao final de um array 
e retorna o novo comprimento desse array.

O método includes() 
determina se um array contém um determinado elemento,
retornando true ou false apropriadamente.

O método join()
 junta todos os elementos de um array (ou um array-like object) 
em uma string e retorna esta string.

O método concat() 
retorna um novo array 
contendo todos os arrays ou valores passados como parâmetro
*/