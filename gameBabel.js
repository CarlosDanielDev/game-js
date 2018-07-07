// let caneta = {};
// let prop = 'marca';
// caneta.tipo = 'ponta fina';
// caneta['marca da caneta'] = 'castel';

//document.write(caneta.marca);

let lanterna = {
	light: 'white',
	minhaCor: function(){
		return 'Luz da lanterna = ' +this.light;
	}
};
document.write(lanterna.minhaCor());