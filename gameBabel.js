//formas de escrever funções
function quadrado(num){
	return num * num;
}
let celular = 'samsung';
document.write(quadrado(5) + '<br>');
document.write(quadrado(7) + '<br>');
document.write(celular + '<br>');

function soma (num, num2){
	return num + num2;
}

document.write(soma(45, 78) + '<br>');

let mult = function (num1, num2){
	return num1 * num2;
}
document.write(mult(34, 6)+'<br>');

let quadrados = num => {
	return num*num
}
document.write(quadrados(6) + '<br>');

let somaEs6 = (num1, num2) =>{
	return num1 + num2;
}

document.write(somaEs6(56, 98) + '<br>');