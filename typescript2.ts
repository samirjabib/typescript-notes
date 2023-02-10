//Diferencias entre Interface vs Class y como manejar las interfaces


class SamirToy{
    private bigoteFrase : string;


    constructor(bigoteFrase: string){
        this.bigoteFrase = bigoteFrase
    }


    bigoteTocado(){
        alert(this.bigoteFrase)
    }
}


const toy = new SamirToy("hola mi nombre es samir")


//Interface


interface Person { //Una interfaz es una estructura que nos dice como debe ser el objeto
    name:string,
    lastName:string,
    age:number,
    breath: () => void //Podemos asignar los datos que deben retornar en un metodo
    favoriteNumber: () => number
}

const person : Person = {
    name:"samir",
    lastName:"elias",
    age:15,
    breath: () => console.log('respire'),
    favoriteNumber : () => 5
}

interface FootBallPlayer extends Person { //Extender es clave cuando entidades comparten datos asi nos ahorarmos escribir de nuevo codigo. 
    preferredFoot:string,
    tshirtNumber:number
}

//Si tenemos un objeto completo es mejor crear otra inferface y agregarla a la interfaz principal