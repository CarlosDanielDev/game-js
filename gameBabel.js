/////// OBJETOS JS - ES6 ////////
let caneta = {tipo:'esferografica'};//passando os atributos de 
caneta.cor = 'azul';
caneta.marca = 'Site BLINDADO';
let propriedade = 'marca';
caneta[propriedade] = 'faber';
caneta['cor da caneta'] = 'vermelho';
document.write(caneta.marca);// return faber
document.write(caneta['cor da caneta']); // return vermelho
////////////////////////////////
