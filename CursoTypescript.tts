class Vehiculo {
  private numPuertas: number;
  private velocidad: number;
  private marca: string;

  constructor(numPuertas: number, velocidad: number, marca: string) {
    this.numPuertas = numPuertas;
    this.velocidad = velocidad;
    this.marca = marca;
  }

  getNumeroPuertas(): number {
    return this.numPuertas;
  }

  setNumeroPuertas(numPuertas: number) {
    this.numPuertas = numPuertas;
  }
}

class Auto extends Vehiculo {
  private cantidadRuedas: number;
  constructor(numPuertas: number, velocidad: number, marca: string, cantidadRuedas: number) {
    super(numPuertas, velocidad, marca);
    this.cantidadRuedas = cantidadRuedas;
  }

  getCantidadRuedas(): number {
    return this.cantidadRuedas;
  }

  setCantidadRuedas(cantidadRuedas: number) {
    this.cantidadRuedas = cantidadRuedas;
  }

  getNumeroPuertas(): number {
    return super.getNumeroPuertas() + 200;
  }
}

const ferrari = new Auto(2, 300, 'Ferrari', 4);
const moto = new Vehiculo(2, 300, 'Moto');

const arregloDeVehiculos: Vehiculo[] = [ferrari, moto];
for (const vehiculo of arregloDeVehiculos) {
  console.log(vehiculo.getNumeroPuertas());
}

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
let persona3: Persona = persona2;

'Class vs Interface';

const personaInterface: Required<PersonaInterface> = {
  nombre: 'Juan',
  edad: 30,
  dni: '123123412'
};

const alumnoInterface: AlumnoInterface = {
  nombre: 'Juan',
  edad: 30,
  dni: '12345678',
  curso: 'Angular'
};

type PersonaReadOnly = Readonly<Persona>;

const personaModificable: PersonaReadOnly = {
  nombre: 'Juan',
  edad: 30
};

personaModificable.nombre = 'Pedro';

interface Curso {
  nombre: string;
  duracion: number;
}

interface GentlemanProgramming {
  nombre: string;
  edad: number;
  cursos: Curso[];
}

const gentlemanProgramming: Partial<GentlemanProgramming> = {
  nombre: 'gentleman',
  edad: 30
};

const logger = <T>(variable: T) => {
  console.log(variable);
};

logger<Persona>(personaModificable);

let variable = '1';
logger<GentlemanProgramming>(gentlemanProgramming as GentlemanProgramming);

interface PersonaInterface {
  nombre: string;
  edad: number;
}

interface AlumnoInterface {
  curso: string;
}

const alumnoOPersona: PersonaInterface & AlumnoInterface = {
    curso: 'Angular',
    edad: 30,
    nombre: 'Juan'
};