const http = require('node:http')
const fs = require('node:fs')

// variable de entorno
const desirePort = process.env.PORT ?? 3000
// ejecutar en la consola -> PORT=123 node 9.http.js

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // creando las rutas de nuestro servidor
  if (req.url === '/') {
    res.end('<h1>Bienvenidos a mi pàgina</h1>')
  } else if (req.url === '/imagen-super-bonita.png') {
    fs.readFile('./placa.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h2>500 Internal server error</h2>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h2>Contacto.</h2>')
  } else {
    res.end('<h2>404</h2>')
  }
}

const server = http.createServer(processRequest)
// creamos el servidor que ejecutará un callback cada vez que reciba una peticion
/*
const server = http.createServer((req, res) => {
  // obtener informacion de la url de la request -> req.url
  console.log('request receibed:', req.url)
  res.end('Hola mundo')
})
*/

// ponemos al servidor a escuchar en el puerto que este disponibles o el que le indiquemos
server.listen(desirePort, () => {
  console.log(`server listening on port http://localhost:${desirePort}`)
})

// vocabulario web

// headers(cabeceras) -> normalmene son informacion que va pegada a la peticion para darle mas contexto
// a la peticion
