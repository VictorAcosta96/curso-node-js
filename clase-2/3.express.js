const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.use(express.json())

/*
// middleware
app.use((req, res, next) => {
//   console.log('Mi primer middleware')
  // trachear la reques a la base de datos
  // revisar si el usuario tiene cookies
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // solo llegan request que son POST y que tienen el header Content-Type: application/json
  let body = ''

  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la información en el req.body
    req.body = data
    next()
  })
})
*/

app.get('/pokemon/ditto', (req, res) => {
//   res.send('<h1>Mi pagina web</h1>')
//   res.json({ message: 'hola mundo' })
  res.json(ditto)
})

// creando un pokemon
app.post('/pokemon', (req, res) => {
  // req.body deberíamos guardar en bbdd
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
