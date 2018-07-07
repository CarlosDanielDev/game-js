'use strict';

//formas de escrever funções
function quadrado(num) {
	return num * num;
}
var celular = 'samsung';
document.write(quadrado(5) + '<br>');
document.write(quadrado(7) + '<br>');
document.write(celular + '<br>');

function soma(num, num2) {
	return num + num2;
}

document.write(soma(45, 78) + '<br>');

var mult = function mult(num1, num2) {
	return num1 * num2;
};
document.write(mult(34, 6) + '<br>');

var quadrados = function quadrados(num) {
	return num * num;
};
document.write(quadrados(6) + '<br>');

var somaEs6 = function somaEs6(num1, num2) {
	return num1 + num2;
};

document.write(somaEs6(56, 98) + '<br>');
