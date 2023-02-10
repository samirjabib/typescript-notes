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



class Auto {
    private numPuertas:number; //El private es un metodo muy imporatne ya que este nos dice que nada mas debe ser posible asignar un valor a sus propiedades mediante los metodos, 
    private velocidad:number;
    private marca:string;


    constructor(numPuertas: number, velocidad: number, marca: string){ //El constructor lo usamos para meter valores por defecto a nuestro objeto. 
        this.numPuertas = numPuertas;
        this.velocidad = velocidad;
        this.marca = marca;
    }


    getNumberoPuertas(): number { //Lo que nos esta diciendo este number, es este metodo va a retornar un valor de tipo number. 
        return this.numPuertas;
    }
 
    setNumeroPuertas(numPuertas : number){ // de esta manera le indicamos a el metodo que el parametro a recibir tiene que ser de tipo number. 
        this.numPuertas = numPuertas
    }
}


const ferrai = new Auto(2, 300, "ferrari") //Creamos el objeto
// ferrai.numPuertas //Esto no es posible por que la propiedad fue puesta privada y es considerado una buena practica

