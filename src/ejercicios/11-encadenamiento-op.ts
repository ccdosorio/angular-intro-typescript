/*
    ===== Código de TypeScript =====
*/

// Encadenamiento opcional

interface Pasajero {
  nombre: string;
  hijos?: string[]
}

const pasajero1: Pasajero = {
  nombre: 'Christian'
}

const pasajero2: Pasajero = {
  nombre: 'David',
  hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos (pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

// imprimeHijos(pasajero2);
imprimeHijos(pasajero1);