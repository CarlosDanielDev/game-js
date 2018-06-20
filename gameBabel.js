///////////// Condições em JS - ES6 ////////////////
if (3 === 3){
	document.write('é igual' + '</br>');
}

let idade = 100;
if (idade >= 19){
	document.write('Você Tem '+ idade + ' Anos de Idade' + '<br>');
} else if (idade >= 18){ 
	document.write('Maior de Idade' + '<br>');
}else {
	document.write('Menor De Idade' + '<br>');
}

////////////Combinando Loops com condições ///////////

for (let i = 0; i < 10; i++) {
	if (i === 3) {
	//	break; para o laço na hora
		continue; // continua o laço ate o fim
	}
	document.write(i + '</br>');
}
//////////////////////////////////////