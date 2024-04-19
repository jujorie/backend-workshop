import Express from 'express'

import models from '../db/models/index.js'

const route = Express.Router()

route.get('/', async (_req, res, _next) => {
  res.json(await models.user.findAll())
})

route.post('/', (_req, res, _next) => {

})

route.put('/:id', (_req, res, _next) => {

})

route.delete('/:id', (_req, res, _next) => {

})

export default route
