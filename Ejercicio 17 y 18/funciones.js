class Perro2 {
    constructor(nombre, edad){
        this.nombre = nombre;     //Propiedad
        this.edad = edad;         //Propiedad
    }

ladrar(){
    console.log('Guau!');
}
}


//Creamos un objeto
const miPerro = new Perro2('Firulais', 3);
const miPerro2 = new Perro2('Lana', 10);

//Usamos un método
miPerro.ladrar(); // -> Guau!



class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo(){
        console.log(`Producto: ${this.nombre}: Precio: $${this.precio}`);
    }
}


const p1 = new Producto('Mouse', 5000); 
const p2 = new Producto('Teclado', 10000);
const p3 = new Producto('Monitor', 200000);

p1.mostrarInfo();
p2.mostrarInfo();
p3.mostrarInfo();





class Animal {

    constructor(nombre){
        this.nombre = nombre;
    }
    comer(){
        console.log('Estoy comiendo...');
    }
}

class Perro extends Animal {

    constructor(nombre, raza){
    
        super(nombre); //Llama al constructor de Animal
        this.raza = raza;    
    }
    ladrar(){
        console.log('Guau!!');
    }
}




const firu = new Perro();
firu.comer(); //Heredado de Animal
firu.ladrar(); //Heredado de Perro


class Matematica{
    static sumar(a, b){
        return a + b;
    }
}

Matematica.sumar(2,3);


class Cuenta{
    #saldo = 0;

    depositar(monto){
        this.#saldo += monto;
    }


    /*//Arreglar esto xd
    retirar(monto){
            if(){ 
            return('El monto a retirar supera la cantidad que posees actualmente');
        }
        this.#saldo -= monto;
    }
    */
    verSaldo(){
        return this.#saldo
    }
}

const cJuli = new Cuenta();
cJuli.depositar(100);
console.log(cJuli.verSaldo()); //100





class Autor {
    constructor(nombre){
        this.nombre = nombre;
        this.cantidadDeLibros = 0;
    }
}

class Libro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        autor.cantidadDeLibros++;
    }

    mostrar(){
        console.log(`${this.titulo} - ${this.autor.nombre}`)
    }
}

const autor1 = new Autor('Borges');
const libro1 = new Libro('Ficciones', autor1);

libro1.mostrar();
console.log(autor1.cantidadDeLibros); // 1






