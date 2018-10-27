//sfär

//Funktion som beräknar volymen och arean och returnerar svaret i en array
function sfar(radie){
	let volym = 4*Math.PI*Math.pow(radie, 3)/3;
	let area = 4*Math.PI*Math.pow(radie,2);
	return [volym, area];
}

//skriver ut resultatet av det angivna argumentet 
document.write(`Volymen på sfären är ${sfar(10)[0].toFixed(2)}\n Arean är ${sfar(10)[1].toFixed(2)}`);



