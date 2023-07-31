const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

// variable de entorno
const desirePort = process.env.PORT ?? 3000
// ejecutar en la consola -> PORT=123 node 9.http.js

// creamos el servidor
const server = http.createServer((req, res) => {
  console.log('request receibed')
  res.end('Hola mundo')
})

findAvailablePort(desirePort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

// escuchamos el puerto por el cual recibir las request
/*
server.listen(3000, () => {
  console.log('server listening in port 3000')
})
*/

// hacer esto solo en desarrollo y cuando no tengamos puertos disponibles
/*
server.listen(0, () => {
  console.log(`server listening in port ${server.address().port}`)
})
*/
