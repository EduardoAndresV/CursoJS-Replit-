class Animal {
  //Metodo que se ejecuta al inicializar la clase
  constructor(nombre,genero){
    this.nomre = nombre;
    this.genero = genero;
  }
  //Metodos
  sonar(){
    console.log("Hago un Sonido");
  }

  saludar (){
    console.log(`Hola me llamo ${this.nomre}`)
  }
}

class Perro extends Animal{
  constructor(nombre,genero,tamanio){
    //super() se manda a llamar el contructor de la clase padre
    super(nombre,genero);
    this.tamanio=tamanio;
  }
  sonar(){
    console.log("Hago un sonido de perro")
  }

  ladrar(){
    console.log("Guau")
  }
  
}

const mickey = new Animal ("Mickey","Macho");
  scooby = new Perro("Scooby","Macho","Gigante");




console.log(mickey)
mickey.saludar()
mickey.sonar()
console.log(scooby)
scooby.saludar()
scooby.sonar()
scooby.ladrar()