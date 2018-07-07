'use strict';

// let caneta = {};
// let prop = 'marca';
// caneta.tipo = 'ponta fina';
// caneta['marca da caneta'] = 'castel';

//document.write(caneta.marca);

var lanterna = {
	light: 'white',
	minhaCor: function minhaCor() {
		return 'Luz da lanterna = ' + this.light;
	}
};
document.write(lanterna.minhaCor());
