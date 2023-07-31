const fs = require('node:fs')

// readdir -> recibe dos parametros uno es el directorio y el segundo es un callback
fs.readdir('.', (error, files) => {
  if (error) {
    console.log('Error al leer el directorio: ', error)
    return
  }

  files.forEach((file) => {
    console.log(file)
  })
})

/*
ls con promesas

const fs = require('node:fs/promises');

fs.readdir('.')
    .then(files =>{
        files.forEach(file =>{
            console.log(file);
        })
    }).catch(error =>{
        if (error) {
            console.log("Error al leer el directorio: ", error);
            return;
        }
    })
*/
