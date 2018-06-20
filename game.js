'use strict';

//////////////ARRAY/////////////////////
var lista = ['maçã', 'leite', 'açucar'];
document.write(lista.length + '<br>'); // return 3
document.write(lista[2] + '</br>'); // return 3º indice do array listas
///////Mudar Indice especifico do array/////
var array = ['Edinei', 'Matheus', 'Daniel'];
array[0] = 'Luan';
document.write(array + '<br>'); // Indice 0 retorna Luan ao Inves de Edinei
////////Excluindo valores do array//////////////////////////
var array2 = ['Leo', 'Wall', 'Yago'];
array2.pop(); // remove o ultimo indice do array
array2.shift(); // remove o primeir indice do array
array2.unshift('Mara'); // adiciona um indice no começo do array
array2.push('Luciana'); // adiciona um indice no final do array
array2.splice(1, 1); // remove um indice do array, primeiro parametro
document.write(array2 + '<br>');
////////////////////////////////////////////
