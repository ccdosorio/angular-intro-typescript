/*
    ===== Código de TypeScript =====
*/

// Desestructuración de Objetos

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: string;
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 100,
    cancion: "Dakiti",
    detalles: {
        autor: "Bad Bunny",
        anio: "2021"
    }
}

const autor = "Fulano";

const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor: autorDetalle } = detalles;

// console.log("El volumen actual es: ", vol);
// console.log("El segundo actual es: ", segundo);
// console.log("La canción actual es: ", cancion);
// console.log("El autor es: ", autorDetalle);

// Desestructuración de Arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [ p1, p2, p3 ] = dbz;
const [ , , p3 ] = dbz;

// console.log('Personaje 1: ', dbz[0]);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);