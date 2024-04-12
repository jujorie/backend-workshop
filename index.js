import Express from 'express'
import morgan from 'morgan'
import { createServer } from 'node:http'

async function main () {
  const SERVER_PORT = Number(process.env.SERVER_PORT ?? '5555')

  const requestListener = Express()

  // Middlewares
  requestListener.use(morgan('dev'))

  // Routes
  requestListener.use('/hello', (req, res, _next) => {
    res.send('hello    ' + req.path + ' ' + JSON.stringify(req.user))
  })

  // Terminal Middlewares
  requestListener.use((req, res, next) => {
    res.statusCode = 404
    next(new Error('Not found'))
  })

  requestListener.use((error, _req, res, _next) => {
    if (res.statusCode < 300) {
      res.statusCode = 500
    }
    res.json({
      error: error.message,
      statusCode: res.statusCode
    })
  })

  // Start Server
  const server = createServer(requestListener)
  server.listen(SERVER_PORT, () => {
    console.log(`Listen on http://localhost:${SERVER_PORT}`)
  })
}

main().catch(error => {
  process.exitCode = 1
  console.error(error.message)
})
