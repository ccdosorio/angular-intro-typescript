/*
    ===== Código de TypeScript =====
*/

// Decoradores

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABCDE';
    
    imprimir() {
        console.log("Hola mundo");
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);