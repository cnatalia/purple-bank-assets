const express = require('express');
const app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static(__dirname + '/assets/'));


app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});