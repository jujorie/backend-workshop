import Express from 'express'
import morgan from 'morgan'
import { errorMiddleware, notFoundMiddleware } from './middlewares/index.mjs'

import userRoute from "./routes/user.mjs"

export function getRequestListener () {
  const requestListener = Express()

  // Middlewares
  requestListener.use(morgan('dev'))

  // Routes
  requestListener.use('/users', userRoute)

  // Terminal Middlewares
  requestListener.use(notFoundMiddleware())
  requestListener.use(errorMiddleware())

  return requestListener
}
