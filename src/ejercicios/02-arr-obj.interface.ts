let habilidades: string[] = ['Correr', 'Jugar'];

// Interfaz

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[],
    puebloNatal?: string
}


// Objeto
const personaje: Personaje = {
    nombre: 'Christian',
    hp: 1000,
    habilidades: ['Correr', 'Jugar']
}


console.table(personaje);