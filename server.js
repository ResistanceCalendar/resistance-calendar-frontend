// enable fetch in node
require('isomorphic-fetch')

require('dotenv').load()
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const express = require('express')
let server

app.prepare().then(() => {
  server = express()
  server.use(handler).listen(3000)
  console.log('listening on port 3000')
})
