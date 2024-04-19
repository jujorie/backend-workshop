import { createServer } from 'node:http'
import { getRequestListener } from './lib/get-request-listener.mjs'

async function main () {
  const SERVER_PORT = Number(process.env.SERVER_PORT ?? '5555')

  const requestListener = getRequestListener()

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
