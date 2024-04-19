# Workshop Backend 2

## Check Changes

* Change type module to type commonjs
* Rename .js files to .mjs
* Add new scripts
* Refactors

## Install Dependencies

```shell
npm i -S sequelize mysql2
npm i -D sequelize-cli
```

### Verify installations

```shell
npx sequelize --version
```

## Initialize Sequelize

### Create the Resource file

create a RC file on the root `.sequelizerc`

```javascript
const path = require('path');

const rootDir = (...paths) => path.resolve(process.cwd(), 'lib', ...paths)

/*
The seeders and the migrations folder is the same
*/

module.exports = {
  config: rootDir('config', 'database.json'),
  'models-path': rootDir('db', 'models'),
  'seeders-path': rootDir('db', 'migrations'),
  'migrations-path': rootDir('db', 'migrations'),
};
```

### Init Sequelize

```shell
npx sequelize init
```

### Create Database

* Update /config/database.json

* Change the user/password

```json
{
  "development": {
    "username": "root",
    "password": "general_root_password",
    "database": "workshop-db",
    "host": "127.0.0.1",
    "port": 33062,
    "dialect": "mysql"
  }
}
```
* Create the db

```shell
npx sequelize db:create 
```

#### Note:
To delete the database

```shell
npx sequelize db:drop
```


## Create First Model

### Update Models Index

DO NOT Convert to ES module and change the next line

```javascript
//  Previous Content
//  ...
const config = require(join(__dirname, '/../../config/database.json'))[env]
//  ...
//   Next Content
```

### Create User Model

Create a model or entity

Name | Type
--- | ---
firstName | `string`
lastName | `string`
email | `string`
password | `string`


```shell
npx sequelize model:create --name user --attributes firstName:string,lastName:string,email:string,password:string
```

#### Note
Remember do not to convert to ES module the model file

## Using The route

### Create the user controller 

create file `routes/user.mjs` (.mjs extension)

```javascript
import Express from 'express'

import models from '../db/models/index.js'

const route = Express.Router()

route.get('/', async (_req, res, _next) => {
  res.json(await models.user.findAll())
})

export default route
```

-- End Workshop 2 --