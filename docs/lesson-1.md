# Workshop Backend 1

## New Project

```shell
git init
npm init -y
```

### Set Git ignore

* Ver: https://www.toptal.com/developers/gitignore

```shell
 curl https://www.toptal.com/developers/gitignore/api/node,macos,windows,linux > .gitignore
```

### Setup as module

```shell
npm pkg set type="module"
npm pkg delete main
npm pkg set exports="./index.js"
```

## Installation

```shell
npm i -S express cors morgan
npm i -D @types/node @types/express @types/morgan eslint
```

* Morgan: https://github.com/expressjs/morgan#readme 
* Express: https://expressjs.com/ 
* Cors: https://github.com/expressjs/cors#readme 

## Setup Tools

npm init @eslint/config

## Main Function

Set start script

```shell
npm pkg set scripts.start="node ."
```

* Main with error
* Check spaces lint error
* See: https://editorconfig.org/

```javascript
async function main () {
    throw new Error('Must be implemented')
}

main().catch(error => {
    // TODO: Explain error code in CI/CD
    // process.exitCode = 1
    console.error(error.message)
})
```

## Main Function with Express

Imports

- Express

```javascript
import Express from 'express'
```

- Http

```javascript
import { createServer } from 'http'
```

- Code

```javascript
async function main () {
  const SERVER_PORT = Number(process.env.SERVER_PORT ?? 5555)

  const requestListener = Express()

  // Middlewares
  /* TODO: Add Middlewares */
 
  // Routes
  /* TODO: Add Routes */

  // Terminal Middlewares
  /* TODO: Add Terminal Middlewares */

  // Start Server
  const server = createServer(requestListener)
  server.listen(SERVER_PORT, () => {
    console.log(`Listen on http://localhost:${SERVER_PORT}`)
  })
}
```

- Set Typescript Validation

```javascript
// @ts-check

```

### Add Nodemon

- Install

```shell
npm i -D nodemon
``` 

- Change npm start script

```shell
npm pkg set scripts.start="nodemon --inspect ."
```

## Add Middlewares and Routes

### Routes

```javascript
requestListener.use('/hello', (_req, res) => {
  res.send('hello')
})
```

- Route order

Case order of / matters

```javascript
requestListener.use('/', (_req, res) => {
  res.send('This is home')
})
```

### Middlewares

- Import

import morgan from 'morgan'

- Code

```javascript
requestListener.use(morgan('dev'))
```

### Terminal Middlewares

```javascript
requestListener.use((_req, res, next) => {
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
```
