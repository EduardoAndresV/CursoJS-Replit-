// Funcion contructora

function Animal(nombre,genero){
  //Atributo
  this.nomre = nombre;
  this.genero = genero;

  //Metodo
  this.sonar = function (){
    console.log("Hago un sonido");
  }
}

Animal.prototype.saludar = function(){
  console.log(`Hola me llamo ${this.nomre}`)
}

const snoopy = new Animal("Snoopy", "Macho");
  lolaBunny = new Animal("Lola", "hembra");


console.log(snoopy)
console.log(lolaBunny)

snoopy.saludar()
lolaBunny.saludar()