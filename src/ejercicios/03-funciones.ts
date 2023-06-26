/*
    ===== Código de TypeScript =====
*/

// Funciones básicas
function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

const multiplicar = (numero: number, otroNumero?: number, base: number = 2): number => {
    return numero * base;
}

// const resultado = sumar(15, 2);

// const resultado2 = multiplicar(5, 0, 10);

// console.log(resultado2);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrar: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;

    // console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Spiderman',
    pv: 150,
    mostrar() {
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 10);

nuevoPersonaje.mostrar();