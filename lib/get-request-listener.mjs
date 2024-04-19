import Express from 'express'
import morgan from 'morgan'
import { errorMiddleware, notFoundMiddleware } from './middlewares/index.mjs'

export function getRequestListener () {
  const requestListener = Express()

  // Middlewares
  requestListener.use(morgan('dev'))

  // Routes
  requestListener.use('/hello', (req, res, _next) => {
    res.send('hello    ' + req.path + ' ' + JSON.stringify(req.user))
  })

  // Terminal Middlewares
  requestListener.use(notFoundMiddleware())
  requestListener.use(errorMiddleware())

  return requestListener
}
