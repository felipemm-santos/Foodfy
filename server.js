const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const routes = require('./routes')

server.set('view engine', 'njk');

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(routes);

nunjucks.configure('views', {
  express: server,

  // Permite html dentro de variáveis
  autoescape: false,
  noCache: true,
});

server.listen(5000, () => {
  console.log('server is running');
});
