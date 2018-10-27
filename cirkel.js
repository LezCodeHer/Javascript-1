//cirkel

let radie = +prompt ("Ange cirkelns radie");



function sizes() {
	let omkr = 2*Math.PI*radie;
	let area = Math.PI*radie*radie;
	return [omkr, area];

	
}

alert (`Omkretsen är ${sizes()[0].toFixed(2)}\n Arean är ${sizes()[1].toFixed(2)}`);

