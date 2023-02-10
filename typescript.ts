/******************************************************  Interferencia de tipos   ***************************************************************++ */

/*
    let numero = 1; //typescript por debajo si no asignamos el tipo de dato, el por debajo ya esta haciendo el tipado. 
    numero="2" //En typescript no podemos asignar otro tipo de valor a la variable con la cual se inicializo.

    Esto se llama inferencia de tipos. 



    typescript solo va a ser una herramienta dentro del desarrollo, cuando la aplicacion este compilada va a estar
    en javascript vanila.

*/ 

const number: number = 1;
const string : string ="string";
const boolean: boolean = true; 

const any : any = "lo que sea" //Con any le indicamos a typescript que no realize la inferencia de tipos, es como si trabajaramos en javascript vanila

const array:[] = []; //Le indicamos a typescript que debe ser un string.
// const arrayString: String[] = ["hola", 1]
const arrayString: String[] = ["hola", "mundo"] //Le indicamos a typescript que va a ser un array de strings, en caso de colar algun otro tipo de dato este nos tirara un error




/******************************************************  Clases   ****************************************************************/
class Vehiculo {
    private numPuertas:number; //El private es un metodo muy imporatne ya que este nos dice que nada mas debe ser posible asignar un valor a sus propiedades mediante los metodos, 
    private velocidad:number;
    private marca:string;


    constructor(numPuertas: number, velocidad: number, marca: string){ //El constructor lo usamos para meter valores por defecto a nuestro objeto. 
        this.numPuertas = numPuertas;
        this.velocidad = velocidad;
        this.marca = marca;
    }


    getNumeroPuertas(): number { //Lo que nos esta diciendo este number, es este metodo va a retornar un valor de tipo number. 
        return this.numPuertas;
    }
 
    setNumeroPuertas(numPuertas : number){ // de esta manera le indicamos a el metodo que el parametro a recibir tiene que ser de tipo number. 
        this.numPuertas = numPuertas
    }
}


// ferrai.numPuertas //Esto no es posible por que la propiedad fue puesta privada y es considerado una buena practica

class Auto extends Vehiculo{ //Extender la clase nos ayuda a reultilizar el molde y poderle agregar mas propiedades. 

    private cantidadRuedas: number;

    constructor(numPuertas: number, velocidad: number, marca: string, cantidadRuedas: number ){ 
        super(numPuertas, velocidad, marca) //Con el metodo super accedemos al cosntructor del objeto padre.
        this.cantidadRuedas = cantidadRuedas;
    }

    getCantidadRuedas(): number {
        return this.cantidadRuedas
    }

    setCantidadRuedas(cantidadRuedas: number){
        this.cantidadRuedas = cantidadRuedas
    }

    getNumeroPuertas(): number{ 
        return super.getNumeroPuertas() + 200 //Con el objeto super le indicamos que vamos aa llamar a la propiedad de el metodo padre.

        /*
            Polimorfismo es la capacidad que algo se comporte diferente dependiendo del contexto donde este , este ubicado. 

        */
    }
}

const ferrari = new Auto(2, 300, "ferrari", 4) //Creamos el objeto
const moto = new Vehiculo(2, 300, 'Moto')


const arregloDeVehiculos : Vehiculo[] = [ ferrari, moto]

for (const vehiculo of arregloDeVehiculos) {
  console.log(vehiculo.getNumeroPuertas());
}

/******************************************************  Shapes   ****************************************************************/


class Persona {
    nombre: string;
    edad: number;
  }
  
  class Persona2 {
    nombre: string;
    edad: number;
  }
  
  let persona1 = new Persona();
  let persona2 = new Persona2();
  let persona3: Persona = persona2; //Esto funciona ya que los dos objetos a pesar de ser construidos a bases de clases diferentes los dos tienen la misma estructura. 


/******************************************************  Class vs Interface   ****************************************************************/

interface PersonaInterface { //Podemos mirar las interfaces como una especie de contrato que se debe cumplir. 
    nombre:string;
    edad:number;
    dni?:number // con el ? Podemos decir que una propiedad es algo opcional. 
}

interface AlumnoInterface extends PersonaInterface{ //Podemos extender tranquilamente las inferfaces para usar sus propiedades dentro de otra y agregarle nuevas
    curso:string,
}


const personaInterface : PersonaInterface = {
    nombre:"samir",
    edad:26,
    dni:1067948715 
    //No podemos asignar propiedades que no estan en al inferface. 
}


// const personaInterface : Partial<PersonaInterface> = { //Con partial le estamos indicando que las propiedades son parcialmente requeridas. 
//     nombre:"samir",
//     edad:26,
//     dni:1067948715 
//     //No podemos asignar propiedades que no estan en al inferface. 
// }


// const personaInterface : Required<PersonaInterface> = { //Con esto le indicamos que todas las propiedades son obligatorias.
//     nombre:"samir",
//     edad:26,
//     dni:1067948715 
//     //No podemos asignar propiedades que no estan en al inferface. 
// }


const alumnoInterface : AlumnoInterface = {
    nombre:"samir",
    edad:26,
    curso:'typescript'
}


/******************************************************  Types   ****************************************************************/
 //Todo en typescript es un tipo


 interface Curso {
    nombre:string;
    duracion:number;
 }

 interface SamirProgramming { //Lo ideal es que cada interface represente un unico nivel de profundidad, entonces lo ideal es que cuando haya un  nuevo nivel, crear una nueva interface
    nombre:string;
    edad:number;
    cursos:Curso[]
 };


 const logger = <T>(variable: T) => {   //Con el tipado generico lo que indicamos es que la variable va a ser tipada del tipo que le metamos en la funcion.
    console.log(variable)
 }

//  logger<number>('hola') //Esto nos dara un error ya que estamos señalado que tiene que ser un number 
logger<string>("hola")

//Tambien podemos usar los tipos genericos en interfaces.


// interface GenericType <T>{
//     variable:T;
//     otraVariable: string;
// }

// const variable: GenericType<number> = { variable:' esto es un string'}
// const variable2: GenericType<number> = { variable:10, otraVariable:'variable'}



/******************************************************  Union e Intercepcion   ****************************************************************/

interface PersonaInterface {
    nombre: string;
    edad: number;
  }
  
  interface AlumnoInterface {
    curso: string;
  }
  
  const alumnoOPersona: PersonaInterface & AlumnoInterface = {
      curso: 'React',
      edad: 30,
      nombre: 'Samir'
  };


  const alumnoOPersona2: PersonaInterface | AlumnoInterface = {
    curso: 'React',
    edad: 30,
    nombre: 'Samir'
};