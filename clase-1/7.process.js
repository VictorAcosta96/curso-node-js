/**
 * Process --> es un objeto global que proporciona informacion y control sobre el proceso
 * actual de ejecucion.
 */

// argumentos de entrada ej-> node 7.process.js twitch victor qwerty hola
// console.log(process.argv);

// controlar el proceso y su salida
// 0 --> significa que todo ha ido bien y queremos finalizar el proceso.
// 1 --> significa que ha habido un error y finalizamos el proceso.
// process.exit(1)

// podemos controlar eventos del proceso
// process.on('exit', () => {
//   // limpiar los recursos
// })

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
