//constructor_Person

//skapa objekt konstruktor
function Person(name, email, mobile){
	this.name = name;
	this.email = email;
	this.mobile = mobile;
//literal notation
	this.adress = {}
	
  //metod som returnerar egenskaper
	this.print = function(){
	  return `\n${this.name}\n${this.adress.street}\n${this.adress.zipcode} ${this.adress.city}`
	};
	
} 

//skapa objekten
let tessa = new Person ("Tessa Johansson", "tj@gmail.com", "0708854777");
  tessa.adress = {
    street : "Kbergsvägen 14",
    zipcode : "113 27",
    city : "Sthlm",
}

let mother = new Person ("Elisabeth Johansson", "eli@gamil.com", "0701600366");
  mother.adress = {
    street : "Hökvägen 20",
    zipcode : "572 31",
    city : "Ohamn",
  }

//anropar metoderna i objektet
console.log (tessa.print());
console.log (mother.print());
































/*
//rektangel

let b = +prompt ("Ange bredd");    //
let h = +prompt ("Ange höjd");

function arean(b,h){
	return b*h;
	

}
//document.write(arean(b,h));   //måste anropa funktionen med argument


function omkr(b,h){
	return 2*b + 2*h;
	
}
//document.write(omkr(b,h));

alert ("Arean är " + arean(b,h) + " " + "Omkretsen är " + omkr(b,h)); 





/*

function tick() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  
  document.write("Time is " + h + " " + m + " " + s);
}
setInterval(tick, 1000);
tick();






/*let day = ["Monday", "Thuesday" , "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"];
let date = new Date();
let month = ["Jan" , "Feb" , "March" , "April" , "May"];

console.log(day[2] + " " + "den" + " " + (date.getDate()) +" " + (month[3]+1) +" " + (date.getFullYear()));



let today = new Date();
console.log(today.toLocaleTimeString());

console.log(today.getFullYear() + "-" + (today.getMonth()+1)+ "-" + (today.getDate()+1));
*/