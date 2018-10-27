//cirkel

let radie = +prompt ("Ange cirkelns radie");

function sizes() {
	let omkr = 2*Math.PI*radie;
	let area = Math.PI*radie*radie;
	return [omkr, area];

	
}

alert (`Omkretsen är ${sizes()[0].toFixed(2)}\n Arean är ${sizes()[1].toFixed(2)}`);



/*let r = +prompt ("Ange cirkelns radie");


function sizes(r){
	return 2*Math.PI*r;

}

function area(r)

alert (`Omkretsen är ${sizes(r).toFixed(2)}`);
*/

//alternativt antagligen det bättre att ha en function och två variebler en för omkrets och en för area.
//Och sen alert o sen anropa funktionen .

//sid 95 tar upp array om returnera två men behövs inte ni detta fallet.


