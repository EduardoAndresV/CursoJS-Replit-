function Animal(nombre,genero){
  //Atributo
  this.nomre = nombre;
  this.genero = genero;
}

Animal.prototype.sonar =function(){
  console.log("Hago un sonido");
  }

Animal.prototype.saludar = function(){
  console.log(`Hola me llamo ${this.nomre}`)
}

function Perro(nombre,genero,tamanio){
  this.super = Animal;
  this.super(nombre,genero);
  this.tamanio=tamanio;
}