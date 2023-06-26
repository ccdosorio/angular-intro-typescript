/*
    ===== Código de TypeScript =====
*/

// Genéricos

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(40);
let soyArreglo = queTipoSoy([1,21,2]);
let soyExplicito = queTipoSoy<number>(100);
