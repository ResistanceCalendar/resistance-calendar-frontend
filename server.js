const express = require('express');
const path = require('path');
const next = require('next');
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express();
  server.use(handler).listen(3000, err => {
    if (err) throw error;
    console.log('> App running on port 3000');
  });

})
