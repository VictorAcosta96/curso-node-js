const fs = require('node:fs');

// esto es de manera sincrona es decir secuencial..


/*
console.log("Leyendo el primer archivo...");
const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text);

console.log("hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo...");
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(secondText);
*/

// para hacer esto asincrono debemos usar el metodo readFile
// haciendo el mismo ejercicio de forma asincrona con los callbacks
console.log("---->Leyendo el primer archivo...");
fs.readFile('./archivo.txt', 'utf-8', (error, text)=>{
    console.log("primer texto: ", text);
});


console.log("---> hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo...");
fs.readFile('./archivo2.txt', 'utf-8', (error,text)=>{
    console.log("segundo texto: ", text);
});

