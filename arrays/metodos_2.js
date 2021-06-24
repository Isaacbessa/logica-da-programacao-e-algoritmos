const numeros = [1, 2, 3, 4, 5, 8];

numeros.splice(1, 2);
console.log(numeros);

console.log(numeros.pop());
console.log(numeros.pop());
console.log(numeros);

/* O método splice() 
altera o conteúdo de uma lista, 
adicionando novos elementos 
enquanto remove elementos antigos.

O método pop() 
remove o último elemento de um array
e retorna aquele elemento.
 
 */