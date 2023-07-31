const fs = require('node:fs');

// informacion del archivo
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // ver si es un fichero(archivo)
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, // tamaño en bytes
);