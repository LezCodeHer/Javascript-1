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

