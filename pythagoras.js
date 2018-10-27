//Pythagoras

//beräkna hypotenusans längd mha pythagoras sats.
function pyth(a,b){
//returnerar pythagoras sats
	return Math.pow(a,2)+Math.pow(b,2);
}
//skriver ut resultatet av de angivna argumenten 
document.write(pyth(10,15).toFixed(2));

