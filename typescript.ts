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